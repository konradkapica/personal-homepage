import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { personalHomepageSaga } from "./features/PersonalHomepage/personalHomepageSaga";
import personalHomepageReducer from "./features/PersonalHomepage/personalHomepageSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        personalHomepage: personalHomepageReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(personalHomepageSaga);

export default store;