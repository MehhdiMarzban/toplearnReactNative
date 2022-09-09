export const cartReducer = (state = [], action) => {
    switch (action.type) {
        case "INIT_CART":
            return [...action.payload];
        case "UPDATE_CART":
            return [...action.payload];
        case "DELETE_CART":
            return [];
        default:
            return state;
    }
};
