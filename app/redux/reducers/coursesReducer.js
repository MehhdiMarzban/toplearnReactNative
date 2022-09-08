export const coursesReducer = (state = [], action) => {
    switch (action.type){
        case "INIT_COURSES":
            return [...action.payload];
        default:
            return state;
    }
};