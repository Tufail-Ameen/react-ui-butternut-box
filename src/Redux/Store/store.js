import { configureStore } from "@reduxjs/toolkit";
import dogNameReducer from "../Slice/NameSlice";

const store = configureStore({
    reducer: {
        dogNameSlice: dogNameReducer,
    },
});


export default store;