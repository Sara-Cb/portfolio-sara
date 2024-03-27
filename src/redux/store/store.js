import { configureStore, combineReducers } from "@reduxjs/toolkit";
import themeReducer from "../reducers/theme";
import { screenReducer } from "../reducers/screen";

const allReducers = combineReducers({
  theme: themeReducer,
  screen: screenReducer,
});

const store = configureStore({
  reducer: allReducers,
});

export default store;
