import DrawerTypes from "../types/drawer.types";

const INITIAL_STATE = {
  show: false,
};

const drawerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DrawerTypes.TOGGLE_DRAWER:
      return {
        ...state,
        show: action.payload,
      };

    default:
      return state;
  }
};

export default drawerReducer;
