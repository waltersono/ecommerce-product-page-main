import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleDrawer } from "../redux/actions/drawer.actions";
import { toggleOverlay } from "../redux/actions/overlay.actions";

const Drawer = () => {
  const show = useSelector((state) => state.drawer.show);

  const dispatch = useDispatch();

  const handleCloseDrawer = () => {
    dispatch(toggleDrawer(false));
    dispatch(toggleOverlay(false));
  };

  return (
    <React.Fragment>
      <nav className={`drawer ${show ? "drawer--show" : ""}`}>
        <img
          src={require("./../../public/images/icon-close.svg")}
          alt="Close Menu"
          className="drawer__close"
          onClick={handleCloseDrawer}
        />
        <ul className="drawer__list">
          <li className="drawer__item">
            <a href="#" className="drawer__link">
              Collections
            </a>
          </li>
          <li className="drawer__item">
            <a href="#" className="drawer__link">
              Men
            </a>
          </li>
          <li className="drawer__item">
            <a href="#" className="drawer__link">
              Women
            </a>
          </li>
          <li className="drawer__item">
            <a href="#" className="drawer__link">
              About
            </a>
          </li>
          <li className="drawer__item">
            <a href="#" className="drawer__link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Drawer;
