/* eslint-disable import/first */
import { legacy_createStore as createStore } from "redux"
import { cakeReducer } from "./cake/cakeReducers"
console.log('store')
export const store = createStore(cakeReducer)