const initialState = {
  collapsed: true,
};

const MessengerBoxReducer = (state = initialState, action) => {
  switch (action.type) {
    case "EXIT_MESSENGER_BOX":
      return { ...state, collapsed: true };
    case "OPEN_MESSENGER_BOX":
      return { ...state, collapsed: false };
    default:
      return { ...state };
  }
};

export default MessengerBoxReducer;
