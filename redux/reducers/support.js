import { SUPPORT } from "./../actions/support";

const initialState = {};

export const supportReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUPPORT:
      return {
        ...state,
        supportLink: action.payload,
      };
    default:
      return state;
  }
};
