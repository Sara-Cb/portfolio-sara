export const toggleDarkmode = () => {
  return {
    type: "TOGGLE_DARKMODE",
  };
};

export const setDarkmode = (dm) => {
  return {
    type: "SET_DARKMODE",
    payload: dm,
  };
};
