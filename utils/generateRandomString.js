const characters =
  "A65fjGFoJ648364deB56jfhf78bcfg9CDE1234FGswxyHIJKLVWXYZahijklmMNOtuvPQRSTUnopqrz0";

export const generateRandomString = () => {
  let result = "";

  for (let i = 0; i < 15; i++) {
    result += characters.charAt(Math.floor(Math.random() * 40));
  }

  return result;
};

export const generateRef = () => {
  let ref = "";

  for (let i = 0; i < 20; i++) {
    ref += `${characters.charAt(Math.floor(Math.random() * 40))}`;
  }

  return `LABOURP${ref}`;
};

export const generateId = () => {
  let id = "";

  for (let i = 0; i < 20; i++) {
    id += `${characters.charAt(Math.floor(Math.random() * 40))}`;
  }

  return id;
};
