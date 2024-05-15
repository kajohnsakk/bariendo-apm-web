"use client";

import { useQuery } from "@tanstack/react-query";
import { httpClient } from "@/lib/http-client";

const getAppointments = () => httpClient.get(`/customer/appointments`);

export const GET_APPOINTMENTS = "GET_APPOINTMENTS";

export const useGetAppointments = () => {
  return useQuery({
    queryKey: [GET_APPOINTMENTS],
    queryFn: getAppointments,
  });
};
