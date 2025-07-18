import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { metricsApi } from "./metricsApi";
import { useAlertStore } from "../../apps/zustandStore";

export interface Metric {
  id: string;
  value: number;
  timestamp: string;
}

interface MetricState {
  realTimeData: Metric[];
}

const initialState: MetricState = {
  realTimeData: [],
};

const metricSlice = createSlice({
  name: "metrics",
  initialState,
  reducers: {
    addRealTimeMetric: (state, action: PayloadAction<Metric>) => {
      state.realTimeData.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(metricsApi.endpoints.getMetrics.matchRejected, () => {
      useAlertStore.getState().addAlert({
        message: "Failed to load metrics!",
        severity: "error",
      });
    });
  },
});

export const { addRealTimeMetric } = metricSlice.actions;
export default metricSlice.reducer;
