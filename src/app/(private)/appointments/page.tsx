import React from "react";

import AppointmentList from "./components/appointment-list";

const AppointmentPage = () => {
  return (
    <div>
      <div className="flex justify-center p-4 mb-4 bg-white">
        <h2 className="text-black font-semibold text-xl">
          Booked Appointments
        </h2>
      </div>
      <AppointmentList />
    </div>
  );
};

export default AppointmentPage;
