import { GET_POST, GET_COMMENTS, GET_LIKES } from "./../actions/post";

const initialState = {};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST:
      return {
        ...state,
        posts: action.payload,
      };
    case GET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };
    case GET_LIKES:
      return {
        ...state,
        likes: action.payload,
      };
    default:
      return state;
  }
};
