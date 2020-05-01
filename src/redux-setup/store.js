import { createStore } from "redux";
const initState = {
  time: 10,
  status: false,
};

const reducers = function (state = initState, action) {
  switch (action.type) {
    case "START-TIME":
      return { ...state, time: state.time - 1, status: true };
    case "UPDATE-TIME":
      return { ...state, time: state.time - 1 };
    case "STOP-TIME":
      return { ...state, status: false };
    case "RESET-TIME":
      return initState;
    default:
      return state;
  }
};

const store = createStore(reducers);

export default store;
