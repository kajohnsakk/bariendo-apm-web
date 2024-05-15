"use client";

import React from "react";
import PropTypes from "prop-types";

import CustomCard from "@/components/custom-card";
import BookingForm from "@/app/shared/booking/booking-form";
import Loading from "@/components/loading";
import { useGetServiceProvider } from "@/app/hooks/useGetServiceProvider";
import ProviderCard from "@/app/shared/provider/provider-card";

const provider = {
  firstName: "Dr. Foo",
  lastName: "Bar",
  email: "foo.bar@gmail.com",
  organization: {
    name: "Foo Bar Clinic",
  },
};

type BookingPageProps = {
  params: {
    serviceId: string;
    providerId: string;
  };
};

const BookingPage = ({ params }: BookingPageProps) => {
  const { serviceId, providerId } = params;
  const { data: serviceProvider, isLoading } = useGetServiceProvider({
    serviceId,
    providerId,
  });

  return (
    <CustomCard title="Booking Appointment">
      <Loading isLoading={isLoading}>
        <div className="my-4">
          <ProviderCard {...serviceProvider?.data} />
        </div>
        <BookingForm
          disabledSlots={serviceProvider?.data.disabledSlots}
          defaultValues={{
            providerId,
            date: new Date(),
            slot: [],
          }}
          workingHours={serviceProvider?.data.workingHours}
        />
      </Loading>
    </CustomCard>
  );
};

BookingPage.propTypes = {
  params: {
    serviceId: PropTypes.string.isRequired,
    providerId: PropTypes.string.isRequired,
  },
};

export default BookingPage;
