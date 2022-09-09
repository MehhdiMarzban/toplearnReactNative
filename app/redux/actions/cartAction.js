import AsyncStorage from "@react-native-async-storage/async-storage";

export const initCartAction = () => {
    return async (dispatch, getState) => {
        try {
            const data = await AsyncStorage.getItem("cart");
            const cart = JSON.parse(data);
            if (cart) {
                await dispatch({ type: "INIT_CART", payload: cart });
            } else {
                await dispatch({ type: "INIT_CART", payload: [] });
            }
        } catch (e) {
            console.log(e);
        }
    };
};

export const updateCartAction = (data) => {
    return async (dispatch, getState) => {
        try {
            const newCart = [...getState().cart, data];
            await AsyncStorage.setItem("cart", JSON.stringify(newCart));
            await dispatch({ type: "UPDATE_CART", payload: newCart });
        } catch (e) {
            console.log(e);
        }
    };
};

export const deleteCartAction = () => {
    return async (dispatch, getState) => {
        try {
            await AsyncStorage.removeItem("cart");
            await await dispatch({ type: "DELETE_CART" });
        } catch (e) {
            console.log(e);
        }
    };
};
