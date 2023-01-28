import { configureStore } from "@reduxjs/toolkit";
import personalHomepageReducer from "./features/PersonalHomepage/personalHomepageSlice";

export default configureStore({
    reducer: {
        personalHomepage: personalHomepageReducer,
    }
});