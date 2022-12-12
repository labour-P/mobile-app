const configs = {
  BASE_URL:
    process.env.NODE_ENV === "production"
      ? "https://api-dev.labourp.ng"
      : "https://api-dev.labourp.ng",
};

export default configs;
