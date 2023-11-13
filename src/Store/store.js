import { configureStore } from "@reduxjs/toolkit";
import { Api } from "../Service/Service";

const store = configureStore({
  reducer: {
    [Api.reducerPath]: Api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Api.middleware),
});

export default store;