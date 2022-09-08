export const ownCoursesReducer = (state = [], action) => {
    switch(action.type){
        case "INIT_OWN_COURSES":
            return [...action.payload];
        case "ADD_OWN_COURSES":
            return [...state, {...action.payload}];
        default:
            return state;
    }
}