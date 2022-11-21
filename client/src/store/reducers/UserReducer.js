const initialState = {
  data: [],
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DATA":
      return { ...state, data: [action.payload] };
    case "EMPTY_DATA":
      return { ...state, data: [] };
    default:
      return { ...state };
  }
};

export default UserReducer;
