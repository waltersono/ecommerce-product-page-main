import React from "react";
import CartItem from "./cart-item.component";
import { useDispatch, useSelector } from "react-redux";
import { removeCartItem } from "../redux/actions/cart.actions";
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const show = useSelector((state) => state.cart.show);

  const dispatch = useDispatch();

  const handleRemoveItem = (id) => {
    dispatch(removeCartItem(id));
  };

  return (
    <div className={`cart ${show ? "cart--show" : ""} `}>
      <p className="cart__title">Cart</p>
      <ul className="cart__list">
        {cartItems.length > 0 ? (
          cartItems.map((item, i) => (
            <CartItem
              key={i}
              {...item}
              onRemoveItem={() => handleRemoveItem(item.id)}
            />
          ))
        ) : (
          <div className="cart--empty">
            <p>You cart is empty</p>
          </div>
        )}
      </ul>
      {cartItems.length > 0 ? (
        <button className="btn cart__btn">Checkout</button>
      ) : null}
    </div>
  );
};

export default Cart;
