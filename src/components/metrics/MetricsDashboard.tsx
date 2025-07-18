import { useWebSocket } from "../../apps/hook";
import { useMetrics } from "../../features/metrics/useMetrics";

const MetricsDashboard = () => {
  const { historicalData, realTimeData, isLoading } = useMetrics();
  useWebSocket("ws://localhost:3000/metrics"); // Connect to WebSocket

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h2> Historical Data</h2>
      <ul>
        {historicalData?.map((metric) => (
          <li key={metric.id}>
            {metric.value} at {metric.timestamp}
          </li>
        ))}
      </ul>

      <h2>Real-Time Data</h2>
      <ul>
        {realTimeData.map((metric) => (
          <li key={metric.id}>
            {metric.value} at {metric.timestamp}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MetricsDashboard;
