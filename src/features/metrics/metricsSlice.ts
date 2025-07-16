import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

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
});

export const { addRealTimeMetric } = metricSlice.actions;

export default metricSlice.reducer;
