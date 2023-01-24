import { GET_ADMIN_POST } from "./../actions/auth";

const initialState = {
  adminPosts: [],
};

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ADMIN_POST:
      return {
        ...state,
        adminPosts: action.payload,
      };
    default:
      return state;
  }
};
