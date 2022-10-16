import {
  SIGNUP,
  LOGOUT,
  LOGIN,
  SET_LOCATION,
  VERIFY_EMAIL_AND_PHONE,
  SET_USER_NAME,
  SET_AGE,
  SET_PROFILE_IMAGE,
} from "./../actions/auth";

const initialState = {
  isAuth: false,
  user: {
    id: 1,
    name: "inedu joshua",
    username: "josh",
    profileUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
  },
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        user: action.payload,
      };
    case SET_PROFILE_IMAGE:
      return {
        ...state,
        isAuth: true,
        profileImage: action.payload,
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
        name: `${action.payload.fisrt_name} ${action.payload.last_name}`,
      };

    case VERIFY_EMAIL_AND_PHONE:
      return {
        ...state,
        token: action.payload.token,
        phone: action.payload.phone,
        email: action.payload.email,
      };

    case SET_LOCATION:
      return {
        ...state,
        state: action.payload.state,
        lga: action.payload.lga,
        ward: action.payload.ward,
        polling_unit: action.payload.pollingUnit,
      };
    case SET_AGE:
      return {
        ...state,
        age: action.payload.age,
      };
    default:
      return state;
  }
};
