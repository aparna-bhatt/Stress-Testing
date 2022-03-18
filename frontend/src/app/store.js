import { configureStore } from "@reduxjs/toolkit";
import StrestSlice from "../features/strestSlice";
export default configureStore({
  reducer: {
    strest: StrestSlice,
  },
});