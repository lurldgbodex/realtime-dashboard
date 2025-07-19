import { useAlertStore } from "../../apps/zustandStore";
import { Snackbar, Alert as MuiAlert } from "@mui/material";

const AlertManager = () => {
  const { alerts, dismissAlert } = useAlertStore();

  return (
    <>
      {alerts.map((alert) => (
        <Snackbar
          key={alert.id}
          open
          autoHideDuration={6000}
          onClose={() => dismissAlert(alert.id)}
        >
          <MuiAlert severity={alert.severity}>{alert.message}</MuiAlert>
        </Snackbar>
      ))}
    </>
  );
};

export default AlertManager;
