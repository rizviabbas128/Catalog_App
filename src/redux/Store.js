import { configureStore } from "@reduxjs/toolkit";
import CountrySlice from "./feature/CountrySlice";

export default configureStore({
    reducer: {
        app: CountrySlice,
    }
})