import { createStore } from "redux";
import { Reducer } from "../Reducers/Reducer";
export const store =  createStore(Reducer);