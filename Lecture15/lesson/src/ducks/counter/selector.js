export const countSelector = (state) => {
  console.log("SELECT");
  return state.counter.count;
};
