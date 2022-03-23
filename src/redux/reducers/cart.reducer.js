import CartTypes from "../types/cart.types";
import CartItem from "./../../models/cart-item.model";
const INITIAL_STATE = {
  show: false,
  items: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartTypes.TOGGLE_CART:
      return {
        ...state,
        show: action.payload,
      };
    case CartTypes.REMOVE_CART_ITEM: {
      const updatedCartItem = Array.from(state.items);

      const index = updatedCartItem.findIndex(
        (item) => item.id == action.payload
      );

      updatedCartItem.splice(index, 1);
      return {
        ...state,
        items: updatedCartItem,
      };
    }
    case CartTypes.ADD_CART_ITEM: {
      const updatedCartItem = Array.from(state.items);

      const index = updatedCartItem.find(
        (item) => item.id == action.payload.id
      );

      if (index) {
        const itemToUpdate = updatedCartItem.find(
          (item) => item.id == action.payload.id
        );

        itemToUpdate.name = action.payload.name;
        itemToUpdate.quantity = action.payload.quantity;
        itemToUpdate.price = action.payload.price;
        itemToUpdate.total = itemToUpdate.quantity * action.payload.price;

        updatedCartItem.splice(index, 1, itemToUpdate);
      } else {
        const newItem = new CartItem(
          action.payload.id,
          action.payload.name,
          action.payload.price,
          action.payload.quantity,
          action.payload.price
        );

        updatedCartItem.push(newItem);
      }

      return {
        ...state,
        items: updatedCartItem,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
