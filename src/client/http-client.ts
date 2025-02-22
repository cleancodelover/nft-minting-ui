import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_APP_API_ENDPOINT;

console.log("baseUrl :>>>>>>>>>>", baseUrl);
export const globalHttpClient = axios.create({
  baseURL: baseUrl,
  withCredentials: true,
});

globalHttpClient.interceptors.request.use(async (config: any) => {
  console.log("Config :>>>>>>>>>>>>>", config)
  return config;
});