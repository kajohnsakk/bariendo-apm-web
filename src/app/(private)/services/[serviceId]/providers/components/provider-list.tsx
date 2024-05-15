"use client";

import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import ProviderCard from "../../../../../shared/provider/provider-card";
import Loading from "@/components/loading";
import { useGetServiceProviders } from "@/app/hooks/useGetServiceProviders";

type ProviderListProps = {
  serviceId: string;
};

const ProviderList = ({ serviceId }: ProviderListProps) => {
  const { data: providers, isLoading } = useGetServiceProviders(serviceId);

  return (
    <Loading isLoading={isLoading}>
      <div className="grid gap-4">
        {providers?.data.map((provider: any) => (
          <Link
            key={provider.id}
            href={`/services/${serviceId}/providers/${provider.id}/booking`}
          >
            <ProviderCard key={provider.id} {...provider} />
          </Link>
        ))}
      </div>
    </Loading>
  );
};

ProviderList.propTypes = {
  serviceId: PropTypes.string.isRequired,
};

export default ProviderList;
