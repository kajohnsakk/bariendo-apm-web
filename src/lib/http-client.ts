import axios from "axios";
import { getSession } from "next-auth/react";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

axios.interceptors.request.use(async (request) => {
  const session = await getSession();

  if (session) {
    request.headers.Authorization = `Bearer ${session?.user.accessToken}`;
    request.headers["Organization-Id"] = session?.user.organizationId;
  }

  return request;
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error.response?.data);
  }
);

export const httpClient = axios;
