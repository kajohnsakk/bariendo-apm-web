import React from "react";
import PropTypes from "prop-types";

import { formatTime } from "@/utils/date-format";

type AppointmentItemProps = {
  provider: string;
  service: String;
  datetime: Date;
  organization: string;
};

const AppointmentItem = ({
  provider,
  service,
  datetime,
  organization,
}: AppointmentItemProps) => {
  return (
    <div className="flex justify-between bg-gray-100 m-3 border-0 px-4 py-5 rounded-md hover:shadow-md">
      <div>
        <h4 className="text-gray-700 font-bold text-lg">{provider}</h4>
        <p className="text-gray-400 text-sm">{service}</p>
      </div>
      <div className="text-right flex flex-col justify-around">
        <p className="text-gray-600 text-md font-semibold">
          {formatTime(datetime)}
        </p>
        <p className="text-md text-black font-semibold">{organization}</p>
      </div>
    </div>
  );
};

AppointmentItem.propTypes = {
  provider: PropTypes.string.isRequired,
  service: PropTypes.string.isRequired,
  datetime: PropTypes.string.isRequired,
  organization: PropTypes.string.isRequired,
};

export default AppointmentItem;
