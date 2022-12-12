import configs from "../../config/config";
import { getData, patchData, postData } from "../../utils/getData";

export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SET_USER_NAME = "SET_USER_NAME";
export const SET_LOCATION = "SET_LOCATION";
export const SET_AGE = "SET_AGE";
export const VERIFY_EMAIL_AND_PHONE = "VERIFY_EMAIL_AND_PHONE";
export const VERIFY_USERNAME = "VERIFY_USERNAME";
export const SIGNUP = "SIGNUP";
export const SET_PROFILE_IMAGE = "SET_PROFILE_IMAGE";
export const SET_OTP = "SET_OTP";

export const verifyEmailAndPhone = (data) => {
  return async (dispatch) => {
    try {
      const res = await postData("/auth/verifyAccount", data);
      dispatch({
        type: VERIFY_EMAIL_AND_PHONE,
        payload: {
          token: res.token,
          email: data.email,
          phone: data.phone,
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  };
};

export const verifyUsername = (data) => {
  return async (dispatch) => {
    try {
      const res = await postData("/auth/verifyUsername", data);
    } catch (error) {
      throw new Error(error);
    }
  };
};

export const signup = (data) => {
  return async (dispatch) => {
    try {
      const res = await postData("/auth/signup", data);

      dispatch({ type: SIGNUP, payload: res.result });
    } catch (error) {
      throw new Error(error);
    }
  };
};

export const login = (data) => {
  return async (dispatch) => {
    try {
      const res = await postData("/auth/signin", data);

      dispatch({ type: LOGIN, payload: res.result });
    } catch (error) {
      throw new Error(error);
    }
  };
};

export const logout = () => {
  return async (dispatch) => {
    dispatch({ type: LOGOUT });
  };
};

export const setName = ({ fisrt_name, last_name }) => {
  return (dispatch) => {
    dispatch({ type: SET_USER_NAME, payload: { fisrt_name, last_name } });
  };
};

export const setEmailAndPhone = ({ phone, email }) => {
  return (dispatch) => {
    dispatch({ type: SET_EMAIL_AND_PHONE, payload: { phone, email } });
  };
};

export const setLocation = ({ state, lga, pollingUnit, ward }) => {
  return (dispatch) => {
    dispatch({
      type: SET_LOCATION,
      payload: { state, lga, pollingUnit, ward },
    });
  };
};

export const setAge = (age) => {
  return (dispatch) => {
    dispatch({ type: SET_AGE, payload: { age } });
  };
};

export const setProfileImage = () => {
  return (dispatch) => {
    dispatch({ type: SET_PROFILE_IMAGE });
  };
};

export const uploadProfileImg = (data) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`${configs.BASE_URL}/upload`, {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: data,
      });

      const response = await res.json();

      console.log(response);
      dispatch({ type: SET_PROFILE_IMAGE, payload: response });
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  };
};

export const forgotPassword = (data) => {
  return async (dispatch) => {
    try {
      const res = await postData("auth/forgeotpassword", data);

      console.log(res);
    } catch (error) {
      throw new Error(error);
    }
  };
};

export const resetPassword = (data) => {
  return async (dispatch) => {
    try {
      const res = await postData("auth/resetpassword", data);

      console.log(res);
    } catch (error) {
      throw new Error(error);
    }
  };
};
