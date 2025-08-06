import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import dataSlice from "./slices/dataSlice";
import { createLogger } from "redux-logger";
import { persistReducer } from "redux-persist";
import localForage from "localforage";
import logger from "redux-logger";
console.log("store initializing ....");

const inProduction = process.env.NODE_ENV === "production";

// console.log('in Production Mode:', inProduction);
// const stateLoggingEnabled =
//   (stateLoggingEnabledFromSearch !== null &&
//     stateLoggingEnabledFromSearch !== 'false') ||
//   !inProduction;

// console.log(
//   'stateLoggingEnabled:',
//   stateLoggingEnabledFromSearch,
//   'x',
//   stateLoggingEnabled
// );
// const logger = createLogger({
//   collapsed: true,
// });

let middleware;
// if (stateLoggingEnabled === true) {
//   middleware = (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }).concat(logger);
// } else {
//   middleware = (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     });
// }

const dataConfig = {
  key: "root",
  storage: localForage,
  whitelist: ["data"],
};

const store = configureStore({
  reducer: {
    datatest: persistReducer(dataConfig, dataSlice.reducer),
    // datatest: dataSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

  //   devTools: devToolsEnabled === true && inProduction === false,
});
export default store;
