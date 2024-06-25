import { combineReducers } from "redux";
import faqs from "./fags";

const allReducers = combineReducers({
    fagsReducers: faqs
})
export default allReducers