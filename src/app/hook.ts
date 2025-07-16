import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./reduxStore";
import { useEffect } from "react";
import {
  addRealTimeMetric,
  type Metric,
} from "../features/metrics/metricsSlice";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export const useWebSocket = (url: string) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const socket = new WebSocket(url);

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data) as Metric;
      dispatch(addRealTimeMetric(data));
    };

    return () => socket.close();
  }, [url, dispatch]);
};
