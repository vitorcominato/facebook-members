const stateDefault = {
  members: [],
  user: {},
};

export default function gitHubReducer(state = stateDefault, action) {
  switch (action.type) {
    case 'GET_MEMBERS': {
      return {
        ...state,
        members: action.payload.data,
      };
    }
    case 'GET_USER_INFO': {
      return {
        ...state,
        user: action.payload.data,
      };
    }

    default: {
      return state;
    }
  }
}
