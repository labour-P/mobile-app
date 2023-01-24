import { getData } from "../../utils/getData";

export const GET_ADMIN_POST = "GET_ADMIN_POST";

export const getAdminPost = () => {
  return async (dispatch) => {
    try {
      const res = await getData("/admin/viewposts");

      console.log("admin", res);
      dispatch({ type: GET_ADMIN_POST, payload: res });
    } catch (error) {
      throw new Error(error);
    }
  };
};
