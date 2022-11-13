const formData = (image) => {
  const data = new FormData();

  let fileType = image.uri.split(".")[1];

  data.append("file", {
    name: `file/${fileType}`,
    type: `${image.type}/${fileType}`,
    uri: image.uri,
  });

  return data;
};

export default formData;
