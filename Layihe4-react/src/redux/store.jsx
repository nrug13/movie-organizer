import { createStore } from "redux";
import { reducer } from "./reducer";
let mystore=createStore(reducer);
export default mystore;