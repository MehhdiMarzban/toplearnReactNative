import { legacy_createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { reducers } from "../reducers";
import { initCoursesAction, userAction, intiOwnCoursesAction, initCartAction } from "../actions";

export const store = legacy_createStore(reducers, compose(applyMiddleware(thunk)));

store.dispatch(initCoursesAction());
store.dispatch(userAction());
store.dispatch(intiOwnCoursesAction());
store.dispatch(initCartAction());