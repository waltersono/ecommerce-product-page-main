import React, { useState } from "react";
import Preview from "../components/preview.component";
import { useDispatch } from "react-redux";
import { addCartItem } from "../redux/actions/cart.actions";
import PRODUCTS_DATA from "../data/products.data";

const SinglePage = () => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    setQuantity((currentValue) => ++currentValue);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((currentValue) => --currentValue);
    }
  };

  let product = null;

  const params = { id: 1 }; // ID should come from the previous page;

  if (params.id) {
    // fetch product from database
    product = PRODUCTS_DATA.find((product) => product.id == params.id);
  }

  const handleAddToCart = () => {
    const newProduct = {
      id: product.id,
      name: product.name,
      quantity,
      price: product.price - product.price * product.discount,
    };

    dispatch(addCartItem(newProduct));
  };

  return (
    <div className="single">
      <div className="single__container">
        <Preview images={product.images} />
        <div className="details">
          <p className="p text-primary-1 text-bold mb-3">SNEAKER COMPANY</p>

          <h2 className="details__name">{product.name}</h2>

          <p className="details__description">{product.description}</p>

          <div className="details__price">
            <div className="details__price-box">
              <span className="details__price-now">
                ${product.price - product.price * product.discount}
              </span>
              <span className="details__price-discount">
                {product.discount * 100}%
              </span>
            </div>
            <div className="details__price-before">${product.price}</div>
          </div>

          <div className="details__controls">
            <div className="details__quantity-box">
              <button
                className="btn details__quantity-btn details__quantity-btn--decrease"
                onClick={handleDecrement}
              >
                <img
                  src={require("./../../public/images/icon-minus.svg")}
                  alt="Decrease"
                  className="details__quantity-icon"
                />
              </button>
              <input
                type="number"
                className="details__quantity-value"
                aria-label="Quantity"
                min="1"
                max="10"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <button
                className="btn details__quantity-btn details__quantity-btn--increase"
                onClick={handleIncrement}
              >
                <img
                  src={require("./../../public/images/icon-plus.svg")}
                  alt="Increase"
                  className="details__quantity-icon"
                />
              </button>
            </div>
            <button
              className="btn btn--primary details__btn"
              onClick={handleAddToCart}
            >
              <img
                src={require("./../../public/images/icon-cart.svg")}
                alt="Add to Cart"
                className="btn__icon"
              />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
