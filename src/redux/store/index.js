//using reduxjs toolkit

import { configureStore } from "@reduxjs/toolkit";
import habitSlice from "../slice/habitSlice";

const store = configureStore({
  reducer: habitSlice.reducer,
});

export default store;

// import { legacy_createStore as createStore } from "redux";
// import rootReducer from "../reducers/rootReducer";

// const store = createStore(rootReducer);
// export default store;
