export const sterilizeLoginDetails = ({ ...strings }) => {
  let obj = {
    email: strings.email.trim(),
    password: strings.password.trim(),
  };
  return obj;
};

export const sterilizeSignupDetails = ({ ...strings }) => {
  let obj = {
    email: strings.email.trim(),
    phone: strings.phone.trim(),
  };
  console.log(obj);
  return obj;
};
