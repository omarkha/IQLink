import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import MenuReducer from "./reducers/MenuReducer";
import MessengerReducer from "./reducers/MessengerReducer";
import LoginReducer from "./reducers/LoginReducer";
const store = createStore(
  combineReducers({
    menuState: MenuReducer,
    messengerState: MessengerReducer,
    loginState: LoginReducer,
  }),
  composeWithDevTools()
);

export default store;
