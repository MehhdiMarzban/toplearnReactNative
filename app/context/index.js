import { createContext, useState } from "react";
import { BackHandler } from "react-native";
import { useDispatch } from "react-redux";

import { updateCartAction, deleteCartAction, deleteOneCartAction } from "../redux/actions";

//* define context here
export const ToplearnContext = createContext({
    //* cartAlert
    showCart: false,
    handleDismissCart: () => null,
    handleDeleteCart: () => null,
    handleDeleteOneItemCart: () => null,
    handleShowCart: () => null,
    handleAddToCart: () => null,
    handleExit: () => {},
});

//* define provider here
export const ToplearnProvider = ({ children }) => {
    //* initial values
    const dispatch = useDispatch();

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

    const handleDeleteOneItemCart = (deleteId) => {
        dispatch(deleteOneCartAction(deleteId));
    };

    const handleAddToCart = async (course) => {
        dispatch(updateCartAction(course));
    };

    //* exit app
    const handleExit = () => {
        BackHandler.exitApp();
    };

    return (
        <ToplearnContext.Provider
            value={{
                showCart,
                handleShowCart,
                handleDismissCart,
                handleDeleteCart,
                handleDeleteOneItemCart,
                handleAddToCart,
                handleExit,
            }}>
            {children}
        </ToplearnContext.Provider>
    );
};
