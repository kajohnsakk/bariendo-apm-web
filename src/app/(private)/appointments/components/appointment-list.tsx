"use client";

import React from "react";
import _ from "lodash";

import AppointmentItem from "./appointment-item";
import { useGetAppointments } from "@/app/hooks/useGetAppointments";
import Loading from "@/components/loading";
import { formatDate, humanizeDate } from "@/utils/date-format";

const AppointmentList = () => {
  const { data: appointments, isLoading } = useGetAppointments();

  const upcomingAppointments = _.groupBy(appointments?.data, (appointment) =>
    formatDate(new Date(appointment.datetime))
  );

  return (
    <Loading isLoading={isLoading}>
      {Object.keys(upcomingAppointments).map((date: any) => (
        <div key={date}>
          <div className="bg-gray-200 py-2 flex justify-center">
            <span className="font-semibold text-md">{humanizeDate(date)}</span>
          </div>
          {upcomingAppointments[date].map((appointment: any) => (
            <AppointmentItem
              provider={
                appointment.provider.firstName +
                " " +
                appointment.provider.lastName
              }
              service={appointment.service.name}
              datetime={appointment.datetime}
              organization={appointment.organization.name}
              key={appointment.id}
            />
          ))}
        </div>
      ))}
    </Loading>
  );
};

export default AppointmentList;
