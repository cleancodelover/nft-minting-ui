import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_APP_API_ENDPOINT;

export const globalHttpClient = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});

globalHttpClient.interceptors.request.use(async (config: any) => {
  return config;
});