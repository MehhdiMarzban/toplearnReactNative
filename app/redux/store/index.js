import { legacy_createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { reducers } from "../reducers";
import { coursesAction, userAction } from "../actions";

export const store = legacy_createStore(reducers, compose(applyMiddleware(thunk)));

store.dispatch(coursesAction());
store.dispatch(userAction());