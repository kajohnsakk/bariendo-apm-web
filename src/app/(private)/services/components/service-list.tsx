"use client";

import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import ServiceItem from "./service-item";
import { useGetServices } from "@/app/hooks/useGetServices";
import Loading from "@/components/loading";

const ServiceList = () => {
  const { data: services, isLoading } = useGetServices();

  return (
    <Loading isLoading={isLoading}>
      <div className="grid grid-cols-2 gap-4">
        {services?.data.map((service: any) => (
          <Link key={service.id} href={`/services/${service.id}/providers`}>
            <ServiceItem key={service.id} {...service} />
          </Link>
        ))}
      </div>
    </Loading>
  );
};

ServiceList.propTypes = {};

export default ServiceList;
