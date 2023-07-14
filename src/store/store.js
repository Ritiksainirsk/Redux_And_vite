import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/userSlice";

const store = configureStore({
  reducer: { users: userSlice },
});

export default store;
