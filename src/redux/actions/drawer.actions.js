import DrawerTypes from "../types/drawer.types";

export const toggleDrawer = (show) => ({
  type: DrawerTypes.TOGGLE_DRAWER,
  payload: show,
});
