import configs from "../../config/config";
import { getData, postData } from "../../utils/getData";

export const GET_POST = "GET_POST";
export const GET_LIKES = "GET_LIKES";
export const GET_COMMENTS = "GET_COMMENTS";

export const getPost = () => {
  return async (dispatch) => {
    try {
      const res = await getData("/routes/posts");

      console.log(res);

      dispatch({ type: "GET_POST", payload: res });
    } catch (error) {
      throw new Error(error);
    }
  };
};

export const createPost = (data) => {
  return async (dispatch) => {
    try {
      const res = await postData("/routes/posts", data);
    } catch (error) {
      throw new Error(error);
    }
  };
};

export const likePost = (data) => {
  return async (dispatch) => {
    try {
      const res = await postData("/routes/rate", data);

      console.log(res);
    } catch (error) {
      throw new Error(error);
    }
  };
};

export const getLikes = async (data) => {
  try {
    const res = await fetch(`${configs.BASE_URL}/api/routes/viewrate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        thread: data,
      }),
    });

    if (!res.ok) {
      const err = await res.json();

      console.log(err);
    }

    const response = await res.json();

    console.log(`likes - ${response}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const makeComment = (data) => {
  return async (dispatch) => {
    try {
      console.log(data);
      const res = await postData("/routes/comments", data);

      console.log(res);
    } catch (error) {
      throw new Error(error);
    }
  };
};

export const getComments = async (data) => {
  try {
    const res = await fetch(`${configs.BASE_URL}/api/routes/viewcomments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        thread: data,
      }),
    });

    if (!res.ok) {
      const err = await res.json();

      console.log(err);
    }

    const response = await res.json();

    console.log(`comments - ${response}`);

    return response;
  } catch (error) {
    console.log(error);
  }
};
