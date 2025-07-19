import { apiSlice } from "../../services/api";
import type { Metric } from "./metricsSlice";

export const metricsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMetrics: builder.query<Metric[], void>({
      query: () => "metrics",
      providesTags: ["Metrics"],
    }),
    addMetric: builder.mutation<Metric, Partial<Metric>>({
      query: (body) => ({
        url: "metrics",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Metrics"],
    }),
  }),
});

export const { useGetMetricsQuery, useAddMetricMutation } = metricsApi;
