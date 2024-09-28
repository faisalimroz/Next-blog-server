
import { cookies } from 'next/headers';
import { Nexios } from "nexios-http";
const baseUrl = process.env.NEXT_PUBLIC_API_URL;

const defaultConfig = {
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  timeout: 10000,
};

const api = new Nexios(defaultConfig);


api.interceptors.request.use((config) => {
  const accessToken = cookies().get("user-token");

  if (accessToken) {
    config.headers = {
      ...config.headers,
      authorize: `Bearer ${accessToken.value}`,
    };
  }

  return config;
});

api.interceptors.response.use((response) => {
  return response;
});


export default api