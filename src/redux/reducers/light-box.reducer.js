import LightBoxTypes from "../types/light-box.types";

const INITIAL_STATE = {
  show: false,
};

const lightBoxReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LightBoxTypes.TOGGLE_LIGHTBOX:
      return {
        ...state,
        show: action.payload,
      };

    default:
      return state;
  }
};

export default lightBoxReducer;
