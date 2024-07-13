export const initialState = {
  count: 0,
  data: [],
};

export const counterReducer = (state = initialState, action) => {
  console.log("REDUCER");

  switch (action.type) {
    case "INCREMENT_COUNTER":
      return {
        ...state,
        count: state.count + action.payload || 1,
      };
    default:
      return state;
  }
};
