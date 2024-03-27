const initialState = {
  width: window.innerWidth,
  size:
    window.innerWidth >= 1200 ? "lg" : window.innerWidth >= 768 ? "md" : "xs",
};

export const screenReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_SCREEN":
      const newWidth = action.payload;
      const newSize = newWidth >= 1200 ? "lg" : newWidth >= 768 ? "md" : "xs";
      return {
        ...state,
        width: newWidth,
        size: newSize,
      };
    default:
      return state;
  }
};
