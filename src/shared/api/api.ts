import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://api.yeatwork.ru/";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.DEV ? "/api" : baseUrl,
    mode: "cors",
  }),
  endpoints: () => ({}),
});
