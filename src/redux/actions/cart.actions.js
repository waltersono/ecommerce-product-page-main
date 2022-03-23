import CartTypes from "../types/cart.types";

export const toggleCart = (show) => ({
  type: CartTypes.TOGGLE_CART,
  payload: show,
});

export const removeCartItem = (id) => ({
  type: CartTypes.REMOVE_CART_ITEM,
  payload: id,
});

export const addCartItem = (product) => ({
  type: CartTypes.ADD_CART_ITEM,
  payload: product,
});
