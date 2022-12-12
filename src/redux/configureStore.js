import { configureStore } from "@reduxjs/toolkit";
import kpiDataMemoryReducer from "./ducks/stats";

const store = configureStore({
  reducer: {
    // bring in reducers here
    kpiDataMemory: kpiDataMemoryReducer
  },
});
export default store;
