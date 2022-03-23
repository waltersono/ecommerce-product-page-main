import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleOverlay } from "./../redux/actions/overlay.actions";
import { toggleDrawer } from "../redux/actions/drawer.actions";
import { toggleCart } from "../redux/actions/cart.actions";
import { toggleLightBox } from "../redux/actions/light-box.actions";

const Overlay = () => {
  const dispatch = useDispatch();

  const show = useSelector((state) => state.overlay.show);
  const opacity = useSelector((state) => state.overlay.opacity);

  const handleOverlayClick = () => {
    dispatch(toggleOverlay(false));
    dispatch(toggleDrawer(false));
    dispatch(toggleCart(false));
    dispatch(toggleLightBox(false));
  };

  return (
    <div
      onClick={handleOverlayClick}
      className={`overlay ${
        show ? `overlay--show overlay--opacity-${opacity} ` : ""
      }`}
    ></div>
  );
};

export default Overlay;
