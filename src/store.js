import { configureStore } from "@reduxjs/toolkit";

import fileReducer from "./redux/file-slice";

export default configureStore({
  reducer: {
    file: fileReducer,
  },
});
