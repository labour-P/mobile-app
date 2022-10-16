const characters =
  "AdeB5678bcfg9CDE1234FGswxyHIJKLVWXYZahijklmMNOtuvPQRSTUnopqrz0";

export const generateRandomString = () => {
  let result = "";

  for (let i = 0; i < 15; i++) {
    result += characters.charAt(Math.floor(Math.random() * 40));
  }

  return result;
};
