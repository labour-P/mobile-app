import { postData } from "../../utils/getData";

export const SUPPORT = "SUPPORT";

export const makeContribution = (data) => {
  return async (dispatch) => {
    try {
      const res = await postData("/routes/contribute", data);

      console.log(res);
    } catch (error) {
      throw new Error(error);
    }
  };
};

export const donate = (data) => {
  return async (dispatch) => {
    try {
      console.log(data);
      const response = await postData(`/routes/donate`, data);

      console.log(response.data);
      // dispatch({ type: SUPPORT, payload: response.data.link });
    } catch (error) {
      throw new Error(error);
    }
  };
};
