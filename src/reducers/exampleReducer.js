const stateDefault = {
  prop1: null,
  prop2: null,
  prop3: null,
};

export default function reducer(state = stateDefault, action) {
  switch (action.type) {
    case 'EXAMPLE_REDUCER': {
      return {
        ...state,
        prop1: true,
      };
    }

    default: {
      return state;
    }
  }
}
