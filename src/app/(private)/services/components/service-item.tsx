import React from "react";
import PropTypes from "prop-types";

type ServiceItemProps = {
  name: string;
};

const ServiceItem = ({ name }: ServiceItemProps) => {
  return (
    <div className="flex p-3 bg-gray-100 rounded-md w-full h-40 items-center justify-center hover:shadow-md cursor-pointer">
      <div className="text-lg font-semibold">{name}</div>
    </div>
  );
};

ServiceItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default ServiceItem;
