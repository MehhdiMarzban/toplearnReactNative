import { createContext, useState } from "react";
import { useDispatch } from "react-redux";

import {deleteCartAction} from "../redux/actions";


export const ToplearnContext = createContext({
    //* cartAlert
    showCart: false,
    handleDismissCart: () => null,
    handleDeleteCart: () => null,
    handleShowCart: () => null,
});

export const ToplearnProvider = ({children}) => {
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

    return (
        <ToplearnContext.Provider
            value={{
                showCart,
                handleShowCart,
                handleDismissCart,
                handleDeleteCart,
            }}>
                {children}
            </ToplearnContext.Provider>
    );
};
