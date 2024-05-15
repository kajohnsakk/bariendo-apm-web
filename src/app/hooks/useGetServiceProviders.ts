"use client";

import { useQuery } from "@tanstack/react-query";
import { httpClient } from "@/lib/http-client";

const getServiceProviders = (serviceId: string) =>
  httpClient.get(`/services/${serviceId}/providers`);

export const GET_SERVICE_PROVIDERS = "GET_SERVICE_PROVIDERS";

export const useGetServiceProviders = (serviceId: string) => {
  return useQuery({
    queryKey: [GET_SERVICE_PROVIDERS, serviceId],
    queryFn: () => getServiceProviders(serviceId),
  });
};
