export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SET_USER_NAME = "SET_USER_NAME";
export const SET_EMAIL_AND_PHONE = "SET_EMAIL_AND_PHONE";
export const SET_LOCATION = "SET_LOCATION";
export const SET_DOB = "SET_DOB";

export const login = () => {
  return async (dispatch) => {
    dispatch({ type: LOGIN });
  };
};

export const logout = () => {
  return async (dispatch) => {
    dispatch({ type: LOGOUT });
  };
};

export const setName = ({ firstName, lastName }) => {
  return (dispatch) => {
    dispatch({ type: SET_USER_NAME, payload: { firstName, lastName } });
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

export const setDob = (dob) => {
  return (dispatch) => {
    dispatch({ type: SET_DOB, payload: { dob } });
  };
};
