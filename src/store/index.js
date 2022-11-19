import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import MenuReducer from "./reducers/MenuReducer";
import MessengerReducer from "./reducers/MessengerReducer";

const store = createStore(
  combineReducers({ menuState: MenuReducer, messengerState: MessengerReducer }),
  composeWithDevTools()
);

export default store;
