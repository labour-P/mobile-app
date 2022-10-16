const configs = {
  BASE_URL:
    process.env.NODE_ENV === "production"
      ? "http://labourp.ng"
      : "http://labourp.ng",
};

export default configs;
