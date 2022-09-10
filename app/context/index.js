import { createContext, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Toast from "react-native-toast-message";

import { updateCartAction, deleteCartAction } from "../redux/actions";

//* define context here
export const ToplearnContext = createContext({
    //* cartAlert
    showCart: false,
    handleDismissCart: () => null,
    handleDeleteCart: () => null,
    handleShowCart: () => null,
    handleAddToCart: () => null,
});

//* define provider here
export const ToplearnProvider = ({ children }) => {
    //* initial values
    const dispatch = useDispatch();
    const cartData = useSelector((state) => state.cart);

    //* cart
    const [showCart, setShowCart] = useState(false);

    const handleShowCart = () => {
        setShowCart(true);
    };
    const handleDismissCart = () => {
        setShowCart(false);
    };

    const handleDeleteCart = () => {
        dispatch(deleteCartAction());
    };

    //* course card
    const handleAddToCart = async (course) => {
        const isAlreadyExist = cartData.find((item) => item.id === course.id);
        if (isAlreadyExist) {
            Toast.show({
                text2: `${course.title} در سبد خرید شما موجود است!`,
                type: "info",
                position: "bottom",
            });
            return;
        }

        await dispatch(updateCartAction(course));
        Toast.show({
            text2: `${course.title} به سبد خرید شما افزوده شد!`,
            type: "info",
            position: "bottom",
        });
    };

    return (
        <ToplearnContext.Provider
            value={{
                showCart,
                handleShowCart,
                handleDismissCart,
                handleDeleteCart,
                handleAddToCart,
            }}>
            {children}
        </ToplearnContext.Provider>
    );
};
