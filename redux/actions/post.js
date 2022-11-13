import configs from "../../config/config";
import { getData, postData } from "../../utils/getData";

export const GET_POST = "GET_POST";
export const GET_LIKES = "GET_LIKES";
export const GET_COMMENTS = "GET_COMMENTS";
export const ADD_COMMENTS = "ADD_COMMENTS";

export const createPost = (data) => {
  return async (dispatch) => {
    console.log(data.imageurl);
    if (data.imageurl !== []) {
      try {
        const promises = data.imageurl.map((img) => {
          return fetch(`${configs.BASE_URL}/upload`, {
            method: "POST",
            headers: {
              "Content-Type": "multipart/form-data",
            },
            body: img,
          }).then((res) => res.json());
        });

        const imgData = Promise.all(promises);

        const responseImg = [];

        imgData
          .then(async (response) => {
            response.map((img) => responseImg.push(img.url));

            const newData = {
              ...data,
              imageurl: responseImg,
            };
            try {
              const res = await postData("/routes/posts", newData);

              console.log(res);
            } catch (error) {
              console.log(error);
              throw new Error(error);
            }
          })
          .catch((err) => console.log(err));
      } catch (error) {
        console.log(error);
        const msg = "File must not exceed 1mb";
        throw new Error(msg);
      }
    } else {
      try {
        const res = await postData("/routes/posts", data);

        console.log(res);
      } catch (error) {
        console.log(error);
        throw new Error(error);
      }
    }
  };
};

export const getPosts = (currentpage) => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `${configs.BASE_URL}/api/routes/viewposts/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ page: currentpage }),
        }
      );
      const postRes = await response.json();

      const threads = postRes.data.map((res) => res.thread);

      const promises = threads.map((thread) => {
        return fetch(`${configs.BASE_URL}/api/routes/count`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ thread }),
        }).then((res) => res.json());
      });

      const countData = Promise.all(promises);

      countData
        .then((resp) => {
          let postArr = [];
          postRes.data.map((post) => {
            resp.map((res) => {
              if (res.thread === post.thread) {
                const response = { ...res, ...post };

                postArr.push(response);
                dispatch({ type: GET_POST, payload: postArr });
              }
            });
          });
        })
        .catch((err) => {
          throw new Error(err);
        });
    } catch (error) {
      throw new Error(error);
    }
  };
};
