const initialState = {
  theme: {
    darkmode: false,
  },
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_DARKMODE":
      return {
        ...state,
        darkmode: !state.darkmode,
      };
    case "SET_DARKMODE":
      return {
        ...state,
        darkmode: action.payload,
      };
    default:
      return state;
  }
};

export default themeReducer;
