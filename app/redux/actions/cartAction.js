import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";

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

export const updateCartAction = (course) => {
    return async (dispatch, getState) => {
        try {
            const cartData = getState().cart;
            const isAlreadyExist = cartData.find((item) => item.id === course.id);
            if (isAlreadyExist) {
                Toast.show({
                    text2: `${course.title} در سبد خرید شما موجود است!`,
                    type: "info",
                    position: "bottom",
                });
                return;
            }

            const newCart = [...cartData, course];
            await AsyncStorage.setItem("cart", JSON.stringify(newCart));
            await dispatch({ type: "UPDATE_CART", payload: newCart });
            Toast.show({
                text2: `${course.title} به سبد خرید شما افزوده شد!`,
                type: "info",
                position: "bottom",
            });
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

export const deleteOneCartAction = (id) => {
    return async (dispatch, getState) => {
        try {
            const cartData = [...getState().cart];
            const newCartData = cartData.filter((item) => item.id !== id);
            await AsyncStorage.setItem("cart", JSON.stringify(newCartData));
            await dispatch({ type: "UPDATE_CART", payload: newCartData });
        } catch (e) {
            console.log(e);
        }
    };
};
