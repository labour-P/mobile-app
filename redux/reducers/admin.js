import { GET_ADMIN_POST } from "./../actions/auth";

const initialState = {};

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ADMIN_POST:
      return {
        ...state,
        adminPost: action.payload,
      };
    default:
      return state;
  }
};
