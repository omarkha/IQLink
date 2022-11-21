const initialState = {
  selected: "main",
};

const MenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_PROJECTS":
      return { ...state, selected: "projects" };
    case "SELECT_TEAMS":
      return { ...state, selected: "teams" };
    case "SELECT_FOLLOWING":
      return { ...state, selected: "following" };
    case "SELECT_MAIN":
      return { ...state, selected: "main" };
    default:
      return { ...state };
  }
};

export default MenuReducer;
