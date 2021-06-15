import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import swiftReducer from "../features/swift/swift";
import deviceReducer from "../features/device/device";
import peersReducer from "../features/peers/peers";

export const store = configureStore({
  reducer: {
    swift: swiftReducer,
    device: deviceReducer,
    peers: peersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
