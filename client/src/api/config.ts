import axios, { Axios } from "axios";

export const axiosInstance: Axios = axios.create({
  baseURL: "http://localhost:3001/",
  timeout: 1000,
});
