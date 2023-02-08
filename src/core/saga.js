import { all } from "redux-saga/effects";
import { themeSaga } from "../common/themeSaga";
import { personalHomepageSaga } from "../features/PersonalHomepage/personalHomepageSaga";

export default function* saga() {
    yield all([
        personalHomepageSaga(),
        themeSaga(),
    ]);
}