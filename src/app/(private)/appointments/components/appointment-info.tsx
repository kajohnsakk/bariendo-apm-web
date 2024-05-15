import React from "react";
import PropTypes from "prop-types";

import { formatDate, formatTime } from "@/utils/date-format";

type AppointmentInfoProps = {
  datetime: Date;
};

const AppointmentInfo = ({ datetime }: AppointmentInfoProps) => {
  return (
    <div>
      <div className="border-b py-2">
        <div className="grid grid-cols-2">
          <div className="text-sm font-medium text-gray-500">
            Appointment Date:
          </div>
          <div className="text-sm font-medium text-gray-500 text-right">
            {formatDate(datetime)}
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="text-sm font-medium text-gray-500">
            Appointment Time:
          </div>
          <div className="text-sm font-medium text-gray-500 text-right">
            {formatTime(datetime)}
          </div>
        </div>
      </div>
    </div>
  );
};

AppointmentInfo.propTypes = {};

export default AppointmentInfo;
