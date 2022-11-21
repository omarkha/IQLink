const initialState = {
  collapsed: true,
};

const MessengerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "COLLAPSE_MESSENGER":
      return { ...state, collapsed: true };
    case "SHOW_MESSENGER":
      return { ...state, collapsed: false };
    default:
      return { ...state };
  }
};

export default MessengerReducer;
