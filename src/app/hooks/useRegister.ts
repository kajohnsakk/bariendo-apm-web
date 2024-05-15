import { useMutation } from "@tanstack/react-query";

import { httpClient } from "@/lib/http-client";
import { RegisterInput } from "../(auth)/register/types/register-type";

const register = async (registerInput: RegisterInput) => {
  return httpClient.post(
    "/auth/sign-up",
    {
      firstName: registerInput.firstName,
      lastName: registerInput.lastName,
      email: registerInput.email,
      password: registerInput.password,
    },
    {
      headers: {
        "Organization-Id": registerInput.organizationId,
      },
    }
  );
};

export const useRegister = () =>
  useMutation({
    mutationFn: register,
  });
