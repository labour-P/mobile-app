import React from "react";
import configs from "../../config/config";
import { GET_POST, ADD_COMMENTS } from "../../redux/actions/post";
import { getData, postData } from "../../utils/getData";

export const getComment = async (thread) => {
  try {
    const res = await fetch(`${configs.BASE_URL}/api/routes/viewcomments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        thread,
      }),
    });

    const response = await res.json();

    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const makeComment = async (data) => {
  try {
    console.log(data);
    const res = await postData("/routes/comments", data);

    console.log(res);
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const getLikes = async (thread) => {
  try {
    const res = await fetch(`${configs.BASE_URL}/api/routes/viewrate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        thread,
      }),
    });

    if (!res.ok) {
      const err = await res.json();

      console.log(err);
    }

    const response = await res.json();
  } catch (err) {
    throw new Error(err);
  }
};
