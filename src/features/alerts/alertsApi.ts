import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

interface Alert {
  id: string;
  message: string;
  severity: "low" | "medium" | "high";
  timestamp: number;
}

export const alertApi = createApi({
  reducerPath: "alertApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  tagTypes: ["Alerts"],
  endpoints: (builder) => ({
    getAlerts: builder.query<Alert[], void>({
      query: () => "alerts",
      providesTags: ["Alerts"],
    }),
    addAlert: builder.mutation<Alert, Omit<Alert, "id">>({
      query: (newAlert) => ({
        url: "alerts",
        method: "POST",
        body: newAlert,
      }),
      invalidatesTags: ["Alerts"],
    }),
  }),
});

// export const { useGetAlertsQuery, useAddAlertMutation } = alertApi;
