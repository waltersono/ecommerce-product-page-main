import React from "react";
import Cart from "./cart.component";
import { useDispatch, useSelector } from "react-redux";
import { toggleOverlay } from "../redux/actions/overlay.actions";
import { toggleDrawer } from "../redux/actions/drawer.actions";
import { toggleCart } from "../redux/actions/cart.actions";

const Menu = () => {
  const totalItems = useSelector((state) => state.cart.items.length);

  const dispatch = useDispatch();

  const handleToggleCart = () => {
    dispatch(toggleCart(true));
    dispatch(toggleOverlay(true, 1));
  };

  const handleOpenDrawer = () => {
    dispatch(toggleOverlay(true));
    dispatch(toggleDrawer(true));
  };

  return (
    <React.Fragment>
      <nav className="menu">
        <img
          onClick={handleOpenDrawer}
          src={require("./../../public/images/icon-menu.svg")}
          alt="Menu"
          className="menu__mobile-icon"
        />
        <h1 className="h1 menu__title">
          <a href="#" className="menu__title-link">
            <img
              src={require("./../../public/images/logo.svg")}
              alt="Sneakers"
              className="menu__logo"
            />
          </a>
        </h1>
        <ul className="menu__items menu__items--1">
          <li className="menu__item">
            <a href="#" className="menu__link">
              Collections
            </a>
          </li>
          <li className="menu__item">
            <a href="#" className="menu__link">
              Men
            </a>
          </li>
          <li className="menu__item">
            <a href="#" className="menu__link">
              Women
            </a>
          </li>
          <li className="menu__item">
            <a href="#" className="menu__link">
              About
            </a>
          </li>
          <li className="menu__item">
            <a href="#" className="menu__link">
              Contact
            </a>
          </li>
        </ul>
        <ul className="menu__items menu__items--2">
          <li className="menu__item menu__item--cart">
            <a
              href="#"
              className="menu__link menu__link--cart"
              onClick={handleToggleCart}
            >
              <img
                src={require("./../../public/images/icon-cart.svg")}
                alt="Cart"
                className="menu__cart-icon"
              />
              <span className="menu__cart-number">{totalItems}</span>
            </a>
            <Cart />
          </li>
          <li className="menu__item menu__item--avatar">
            <a href="#" className="menu__link">
              <img
                src={require("./../../public/images/image-avatar.png")}
                alt="Profile"
                className="menu__avatar"
              />
            </a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Menu;
