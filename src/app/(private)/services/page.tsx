import React from "react";

import ServiceList from "./components/service-list";
import CustomCard from "@/components/custom-card";

const ServicePage = () => {
  return (
    <CustomCard title="Select Service" showBackButton={false}>
      <ServiceList />
    </CustomCard>
  );
};

export default ServicePage;
