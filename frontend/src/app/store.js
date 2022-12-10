import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import ticketSlice from "../features/tickets/ticketSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    tickets: ticketSlice,
  },
});
