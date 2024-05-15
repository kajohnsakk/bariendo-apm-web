"use client";

import { useQuery } from "@tanstack/react-query";
import { httpClient } from "@/lib/http-client";

const getServices = () => httpClient.get("/services");

export const GET_SERVICES = "GET_SERVICES";

export const useGetServices = () => {
  return useQuery({
    queryKey: [GET_SERVICES],
    queryFn: getServices,
  });
};
