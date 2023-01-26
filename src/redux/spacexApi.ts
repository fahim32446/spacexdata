import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const spacexApi = createApi({
  reducerPath: "spacexApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spacexdata.com/v3/",
  }),
  endpoints: (builder) => ({
    getMissions: builder.query({
      query: () => "launches",
    }),
    getMissionById: builder.query({
      query: (id: number) => `launches/${id}`,
    }),
  }),
});

export const { useGetMissionsQuery, useGetMissionByIdQuery } = spacexApi;
