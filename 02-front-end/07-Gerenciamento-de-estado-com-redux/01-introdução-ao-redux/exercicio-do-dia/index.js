import { legacy_createStore as createStore } from 'redux';
  import { composeWithDevTools} from '@redux-devtools/extension'

  const INITIAL_STATE = {
        colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
        index: 0,
  };

  const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'NEXT_COLOR':
        return {
          ...state,
          index: state.index === state.colors.length - 1 ? 0 : state.index + 1,
        };
      case 'PREVIOUS_COLOR':
        return {
          ...state,
          index: state.index === 0 ? state.colors.length - 1 : state.index - 1,
        };
      default:
        return state;
    }
  }

  const store = createStore(reducer, composeWithDevTools())