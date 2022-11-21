const initialState = {
  shown: false,
};

const LoginModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_MODAL":
      return { ...state, shown: true };
    case "HIDE_MODAL":
      return { ...state, shown: false };
    default:
      return { ...state };
  }
};

export default LoginModalReducer;
