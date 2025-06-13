import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.yeatwork.ru/",
  }),
  endpoints: () => ({}),
});
