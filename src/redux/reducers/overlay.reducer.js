import OverlayTypes from "../types/overlay.types";

const INITIAL_STATE = {
  show: false,
  opacity: 8,
};

const overlayReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OverlayTypes.TOGGLE_OVERLAY:
      return {
        ...state,
        show: action.payload.show,
        opacity: action.payload.opacity,
      };

    default:
      return state;
  }
};

export default overlayReducer;
