import React from "react";

const CartItem = ({ description, price, quantity, total, onRemoveItem }) => {
  return (
    <li className="cart__item">
      <img
        src={require("./../../public/images/image-product-1-thumbnail.jpg")}
        alt="Product"
        className="cart__img"
      />
      <div className="cart__details">
        <p className="cart__product-title">{description}</p>
        <div className="cart__product-value">
          <span className="cart__product-price">${price}</span>
          <span className="cart__product-quantity">x {quantity} </span>
          <span className="cart__product-total">${total}</span>
        </div>
      </div>
      <img
        onClick={onRemoveItem}
        src={require("./../../public/images/icon-delete.svg")}
        alt="Remove"
        className="cart__remove"
      />
    </li>
  );
};

export default CartItem;
