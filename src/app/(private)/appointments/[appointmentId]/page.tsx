import React from "react";
import PropTypes from "prop-types";

import ProviderCard from "../../../shared/provider/provider-card";
import CustomCard from "@/components/custom-card";
import AppointmentInfo from "../components/appointment-info";

const provider = {
  firstName: "Dr. Foo",
  lastName: "Bar",
  email: "foo.bar@gmail.com",
  organization: {
    name: "Foo Bar Clinic",
  },
};

const AppointmentPage = () => {
  return (
    <CustomCard title="Appointment">
      <ProviderCard {...provider} />
      <div className="my-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Appointment Details
        </h2>
        <div>
          <AppointmentInfo datetime={new Date()} />
        </div>
      </div>
    </CustomCard>
  );
};

AppointmentPage.propTypes = {};

export default AppointmentPage;
