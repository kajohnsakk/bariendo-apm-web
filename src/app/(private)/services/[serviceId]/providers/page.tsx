import React from "react";
import PropTypes from "prop-types";

import ProviderList from "./components/provider-list";
import CustomCard from "@/components/custom-card";

type ProviderPageProps = {
  params: {
    serviceId: string;
  };
};

const ProviderPage = ({ params }: ProviderPageProps) => {
  const { serviceId } = params;

  return (
    <CustomCard title="Select Provider">
      <ProviderList serviceId={serviceId} />
    </CustomCard>
  );
};

ProviderPage.propTypes = {};

export default ProviderPage;
