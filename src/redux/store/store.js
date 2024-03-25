import { configureStore, combineReducers } from "@reduxjs/toolkit";
import themeReducer from "../reducers/theme";

const allReducers = combineReducers({
  theme: themeReducer,
});

const store = configureStore({
  reducer: allReducers,
});

export default store;
