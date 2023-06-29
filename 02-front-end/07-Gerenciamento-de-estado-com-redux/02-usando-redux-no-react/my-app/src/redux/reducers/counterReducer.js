const INITIAL_COUNT = { count: 9, clicks: 0,};

const counterReducer = (state = INITIAL_COUNT, action) => {
  switch(action.type) {
    case "INCREMENT_COUNTER":
      return {
        ...state,
        count: state.count + action.payload};

    default:
      return state;
  }
}

export default counterReducer