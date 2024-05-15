import React from "react";
import PropTypes from "prop-types";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

type ProviderCardProps = {
  firstName: string;
  lastName: string;
  organization: {
    name: string;
  };
};

const ProviderCard = ({
  firstName,
  lastName,
  organization,
}: ProviderCardProps) => {
  return (
    <div className="p-3 bg-gray-100 rounded-md w-full hover:shadow-md cursor-pointer">
      <div className="flex items-center space-x-3">
        <Avatar>
          <AvatarFallback className="bg-primary text-white">
            {`${firstName.charAt(0)}${lastName.charAt(0)}`}
          </AvatarFallback>
        </Avatar>
        <div className="w-full">
          <div className="text-lg font-semibold space-x-2">
            <span>{firstName}</span>
            <span>{lastName}</span>
          </div>
          <div className="text-xs font-mediun text-gray-400">
            {organization?.name}
          </div>
        </div>
      </div>
    </div>
  );
};

ProviderCard.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  organization: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProviderCard;
