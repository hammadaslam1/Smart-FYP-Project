/* eslint-disable no-unused-vars */
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import userReducer from "./userReducer/userSlice";
import tabReducer from "./tabs/TabSlice";
import studentReducer from './studentReducer/studentSlice'
import { persistReducer, persistStore } from "redux-persist";
import LinkReducer from "./links/LinkReducer";
// import coordinatorSlice from "./coordinatorReducer/coordinatorSlice";

const rootReducers = combineReducers({
  user: userReducer,
  tab: tabReducer,
  links: LinkReducer,
  student:studentReducer,
});

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
