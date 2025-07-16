import { configureStore } from "@reduxjs/toolkit";
import metricsReducer from "../features/metrics/metricsSlice";
import alertsReducer from "../features/alerts/alertsSlice";
import { apiSlice } from "../services/api";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    metric: metricsReducer,
    alerts: alertsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiSlice.middleware),
});

// enable refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
