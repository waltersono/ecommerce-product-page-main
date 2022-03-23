import OverlayTypes from "../types/overlay.types";

export const toggleOverlay = (show, opacity = 8) => ({
  type: OverlayTypes.TOGGLE_OVERLAY,
  payload: { show, opacity },
});
