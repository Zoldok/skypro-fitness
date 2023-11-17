import { configureStore } from "@reduxjs/toolkit";
import { Api } from "./Service/Service";
import appSlice from "./Slice/Slice";

const store = configureStore({
  reducer: {
    app: appSlice,
    [Api.reducerPath]: Api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Api.middleware),
});

export default store;