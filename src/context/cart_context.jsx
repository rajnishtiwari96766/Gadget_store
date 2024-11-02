/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/cart_reducer";

const CartContext = createContext(); //first step

const initialState = {
    cart: [],
    singleItem: {}
}; //second step

export const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addItemToCart = (item) => {
        dispatch({ type: 'Add_to_cart', payload: item })
    }

    const removeItemFromCart = (index) => {
        dispatch({ type: 'Remove_item', payload: index });
    }

    const clearCart = () => {
        dispatch({ type: 'Clear_cart' });
    }

    return (
        <CartContext.Provider value={{ ...state, addItemToCart, removeItemFromCart, clearCart }}>{children}</CartContext.Provider>
    )
} // third step

const cartHook = () => {
    return useContext(CartContext);
} // Last step to get all the data whereever you need

export { CartContext, cartHook }