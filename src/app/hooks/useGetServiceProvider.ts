"use client";

import { useQuery } from "@tanstack/react-query";
import { httpClient } from "@/lib/http-client";

const getServiceProvider = (serviceId: string, providerId: string) =>
  httpClient.get(`/services/${serviceId}/providers/${providerId}`);

export const GET_SERVICE_PROVIDER = "GET_SERVICE_PROVIDER";

export const useGetServiceProvider = ({
  serviceId,
  providerId,
}: {
  serviceId: string;
  providerId: string;
}) => {
  return useQuery({
    queryKey: [GET_SERVICE_PROVIDER, serviceId, providerId],
    queryFn: () => getServiceProvider(serviceId, providerId),
  });
};
