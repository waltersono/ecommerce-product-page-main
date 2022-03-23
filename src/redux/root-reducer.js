import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

import overlayReducer from "./reducers/overlay.reducer";
import drawerReducer from "./reducers/drawer.reducer";
import cartReducer from "./reducers/cart.reducer";
import lightBoxReducer from "./reducers/light-box.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};

const rootReducer = combineReducers({
  overlay: overlayReducer,
  drawer: drawerReducer,
  cart: cartReducer,
  lightBox: lightBoxReducer,
});

export default persistReducer(persistConfig, rootReducer);
