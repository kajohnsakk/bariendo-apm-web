import { httpClient } from "@/lib/http-client";

export const authenticate = (
  email: string,
  password: string,
  organizationId: string
) => {
  return httpClient.post(
    "/auth/sign-in",
    {
      email,
      password,
      userScope: "customer",
    },
    {
      headers: {
        "Organization-Id": organizationId,
      },
    }
  );
};
