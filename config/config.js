const configs = {
  BASE_URL:
    process.env.NODE_ENV === "production"
      ? "http://104.238.184.52"
      : "http://104.238.184.52",
};

export default configs;
