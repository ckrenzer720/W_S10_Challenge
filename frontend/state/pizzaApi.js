import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pizzaApi = createApi({
  reducerPath: "pizzaApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9009/api/pizza/history" }),
  tagTypes: ["Pizza"],
  endpoints: (build) => {
    pizzaHistory: build.query({
      query: () => "getOrders",
      providesTags: ["Pizza"],
    });
  },
});
