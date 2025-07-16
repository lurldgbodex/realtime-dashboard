import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface AlertState {
  dismissedAlerts: string[]; //stores ids of dismissed alerts
}

const initialState: AlertState = {
  dismissedAlerts: [],
};

const alertsSlice = createSlice({
  name: "alerts",
  initialState,
  reducers: {
    dismissAlert: (state, action: PayloadAction<string>) => {
      state.dismissedAlerts.push(action.payload);
    },
    restoreAlert: (state, action: PayloadAction<string>) => {
      state.dismissedAlerts = state.dismissedAlerts.filter(
        (id) => id !== action.payload
      );
    },
  },
});

export const { dismissAlert, restoreAlert } = alertsSlice.actions;
export default alertsSlice.reducer;
