import configs from "../config/config";

export const getData = async (url, data) => {
  const res = await fetch(`${configs.BASE_URL}/api${url}`);

  const response = await res.json();
  return response;
};

export const postData = async (url, data) => {
  const response = await fetch(`${configs.BASE_URL}/api${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const resErr = await response.json();
    console.log(resErr);
    throw new Error(resErr.message);
  }

  const res = await response.json();
  console.log(res);
  return res;
};

export const patchData = async (url, data) => {
  const response = await fetch(`${configs.BASE_URL}/api${url}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const resErr = await response.json();
    console.log(resErr);
    throw new Error(resErr.message);
  }

  const res = await response.json();
  console.log(res);
  return res;
};
