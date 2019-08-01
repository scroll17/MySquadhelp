/* like mutation */
import ACTION from '../actions/actiontsTypes';

const initialState = {
  isFetching: "notHave",
  error: null,
  user: null,
  users: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ACTION.USERS_REQUEST: {
      console.log("isFetching true", action);
      return {
        ...state,
        isFetching: "requested",
        error: null
      }
    }
    case ACTION.USERS_RESPONSE: {
      console.log("isFetching false", action);
      return {
        ...state,
        ...action,
        isFetching: "answered",
        error: null
      }
    }
    case ACTION.USERS_ERROR: {
      return {
        ...state,
        isFetching: false,
        error: action.error,
        users: []
      }
    }
    default: {
      return state;
    }
  }
}


