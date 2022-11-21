import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import MenuReducer from "./reducers/MenuReducer";
import MessengerReducer from "./reducers/MessengerReducer";
import LoginReducer from "./reducers/LoginReducer";
import MessengerBoxReducer from "./reducers/MessengerBoxReducer";
import LoginModalReducer from "./reducers/loginModalReducer";
import UserReducer from "./reducers/UserReducer";

const store = createStore(
  combineReducers({
    menuState: MenuReducer,
    messengerState: MessengerReducer,
    loginState: LoginReducer,
    messengerBoxState: MessengerBoxReducer,
    loginModalState: LoginModalReducer,
    userModalState: UserReducer,
  }),
  composeWithDevTools()
);

export default store;
