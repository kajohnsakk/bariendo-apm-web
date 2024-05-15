"use client";

import { useMutation } from "@tanstack/react-query";

import { httpClient } from "@/lib/http-client";
import { CreateAppointment } from "../shared/booking/types/create-appointment";

const createAppointment = (createAppointment: CreateAppointment) =>
  httpClient.post("/customer/appointments", createAppointment);

export const useCreateAppointment = () => {
  return useMutation({
    mutationFn: createAppointment,
  });
};
