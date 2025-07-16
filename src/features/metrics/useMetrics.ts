import { useAppSelector } from "../../app/hook";
import { useGetMetricsQuery } from "./metricsApi";

export const useMetrics = () => {
  const { data: historicalData, isLoading, error } = useGetMetricsQuery();
  const realTimeData = useAppSelector((state) => state.metric.realTimeData);

  return [historicalData, realTimeData, isLoading, error];
};
