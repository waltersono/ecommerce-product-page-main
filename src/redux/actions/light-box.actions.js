import LightBoxTypes from "../types/light-box.types";

export const toggleLightBox = (show) => ({
  type: LightBoxTypes.TOGGLE_LIGHTBOX,
  payload: show,
});
