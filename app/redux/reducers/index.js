import {combineReducers} from "redux";

import {coursesReducer} from "./coursesReducer";
import {userReducer} from "./userReducer";
import { ownCoursesReducer } from "./ownCoursesReducer";

export const reducers = combineReducers({
    user: userReducer,
    courses: coursesReducer,
    ownCourses: ownCoursesReducer
});