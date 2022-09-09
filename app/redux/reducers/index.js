import { combineReducers } from "redux";

import { coursesReducer } from "./coursesReducer";
import { userReducer } from "./userReducer";
import { ownCoursesReducer } from "./ownCoursesReducer";
import { cartReducer } from "./cartReducer";

export const reducers = combineReducers({
    user: userReducer,
    courses: coursesReducer,
    ownCourses: ownCoursesReducer,
    cart: cartReducer,
});
