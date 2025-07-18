import { create } from "zustand";
import { persist } from "zustand/middleware";

type Alert = {
  id: string;
  message: string;
  severity: "error" | "warning" | "info" | "success";
  timestamp: Date;
};

type AlertState = {
  alerts: Alert[];
  addAlert: (alert: Omit<Alert, "id" | "timestamp">) => void;
  dismissAlert: (id: string) => void;
};

export const useAlertStore = create<AlertState>()(
  persist(
    (set) => ({
      alerts: [],
      addAlert: (alert) =>
        set((state) => ({
          alerts: [
            ...state.alerts,
            {
              ...alert,
              id: Math.random().toString(36).substring(2, 9),
              timestamp: new Date(),
            },
          ],
        })),
      dismissAlert: (id) =>
        set((state) => ({
          alerts: state.alerts.filter((alert) => alert.id !== id),
        })),
    }),
    {
      name: "alert-storage",
      partialize(state) {
        alerts: state.alerts;
      },
    }
  )
);
