export const setData = (data) => ({
  type: "SET_DATA",
  payload: data,
});

export const emptyData = () => ({
  type: "EMPTY_DATA",
});
