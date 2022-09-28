import {
  SIGNUP,
  LOGOUT,
  LOGIN,
  SET_LOCATION,
  SET_EMAIL_AND_PHONE,
  SET_USER_NAME,
  SET_DOB,
} from "./../actions/auth";

const initialState = {
  isAuth: false,
  user: {},
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        user: action.payload,
        isAuth: true,
      };
    case LOGOUT: {
      return {
        ...state,
        user: {},
        isAuth: false,
      };
    }
    case LOGIN:
      return {
        ...state,
        user: action.payload,
        isAuth: true,
      };
    case SET_USER_NAME:
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      };

    case SET_EMAIL_AND_PHONE:
      return {
        ...state,
        phone: action.payload.phone,
        email: action.payload.email,
      };

    case SET_LOCATION:
      return {
        ...state,
        state: action.payload.state,
        lga: action.payload.lga,
        ward: action.payload.ward,
        pollingUnits: action.payload.pollingUnit,
      };
    case SET_DOB:
      return {
        ...state,
        dob: action.payload.dob,
      };
    default:
      return state;
  }
};
