import isEmail from "validator/lib/isEmail";

export const nameError = (
  { fisrt_name, last_name },
  checked,
  checkedTwo,
  setError
) => {
  if (!checked) {
    setError((error) => ({
      ...error,
      res: "You have not agreed to our privacy policy",
    }));
    return true;
  } else {
    setError((error) => ({ ...error, res: "" }));
  }

  if (!checkedTwo) {
    setError((error) => ({
      ...error,
      res: "You have not agreed to our user generated content policy",
    }));
    return true;
  } else {
    setError((error) => ({ ...error, res: "" }));
  }

  if (!fisrt_name.trim()) {
    setError((error) => ({
      ...error,
      fisrt_name: "first name cannot be empty",
    }));
    return true;
  } else {
    setError((error) => ({ ...error, fisrt_name: "" }));
  }

  if (!last_name.trim()) {
    setError((error) => ({
      ...error,
      last_name: "last name cannot be empty",
    }));
    return true;
  } else {
    setError((error) => ({ ...error, last_name: "" }));
  }
};

export const emailAndPhoneError = ({ phone, email }, setError) => {
  if (!phone.trim()) {
    setError((error) => ({
      ...error,
      phone: "phone number name cannot be empty",
    }));
    return true;
  } else {
    setError((error) => ({ ...error, phone: "" }));
  }

  if (phone.trim().length < 11 || phone.trim().length > 11) {
    setError((error) => ({
      ...error,
      phone: "please input a valid phone number",
    }));
    return true;
  } else {
    setError((error) => ({ ...error, phone: "" }));
  }

  if (!isEmail(email.trim())) {
    setError((error) => ({
      ...error,
      email: "please input a valid email",
    }));
    return true;
  } else {
    setError((error) => ({ ...error, email: "" }));
  }
};

export const loginError = ({ email, password }, setError) => {
  if (!isEmail(email.trim())) {
    setError((error) => ({
      ...error,
      email: "please input a valid email",
    }));
    return true;
  } else {
    setError((error) => ({ ...error, email: "" }));
  }

  if (password.trim().length < 6) {
    setError((error) => ({
      ...error,
      password: "password must be at least 6 characters",
    }));
    return true;
  } else {
    setError((error) => ({ ...error, password: "" }));
  }
};

export const stateError = ({ state, lga, pollingUnit, ward }, setError) => {
  if (!state) {
    setError((error) => ({ ...error, state: "Please select a state" }));
    return true;
  } else {
    setError((error) => ({ ...error, state: "" }));
  }

  if (!lga) {
    setError((error) => ({
      ...error,
      lga: "please select a Local Government Area",
    }));
    return true;
  } else {
    setError((error) => ({ ...error, lga: "" }));
  }

  if (!ward) {
    setError((error) => ({ ...error, ward: "Please select a ward" }));
    return true;
  } else {
    setError((error) => ({ ...error, ward: "" }));
  }

  if (!pollingUnit) {
    setError((error) => ({
      ...error,
      pollingUnit: "Please select a polling unit",
    }));
    return true;
  } else {
    setError((error) => ({ ...error, pollingUnit: "" }));
  }
};

export const ageError = ({ formattedDate }, age, setError) => {
  if (!formattedDate) {
    setError("Please select a date of birth");
    return true;
  } else {
    setError("");
  }
  if (age < 18) {
    setError("you must be above 18 years to register");
    return true;
  } else {
    setError("");
  }
};

export const signUpError = (
  { username, password, confirmPassword },
  setError
) => {
  if (!username.trim()) {
    setError((error) => ({ ...error, username: "Please select a username" }));
    return true;
  } else {
    setError((error) => ({ ...error, username: "" }));
  }

  if (password.trim().length < 6) {
    setError((error) => ({
      ...error,
      password: "password must be at least 6 characters long",
    }));
    return true;
  } else {
    setError((error) => ({ ...error, password: "" }));
  }

  if (confirmPassword.trim() !== password.trim()) {
    setError((error) => ({
      ...error,
      confirmPassword: "passwords do not match",
      password: "passwords do not match",
    }));
    return true;
  } else {
    setError((error) => ({ ...error, confirmPassword: "" }));
  }
};

export const phoneError = (phone, setError) => {
  if (!phone.trim()) {
    setError((errors) => ({
      ...errors,
      phone: "phone number name cannot be empty",
    }));
    return true;
  } else {
    setError((errors) => ({ ...errors, phone: "" }));
  }

  if (phone.trim().length < 11 || phone.trim().length > 11) {
    setError((errors) => ({
      ...errors,
      phone: "please input a valid phone number",
    }));
    return true;
  } else {
    setError((errors) => ({ ...errors, phone: "" }));
  }
};

export const resetError = (
  { password, confirmPassword },
  otp,
  setError,
  otpPin
) => {
  console.log("be otp-", otpPin.otp);

  if (!otpPin) {
    setError((error) => ({ ...error, otp: "OTP must be six characters" }));
    return true;
  } else {
    setError((error) => ({ ...error, otp: "" }));
  }

  if (otpPin.length < 6 || otpPin.length > 6) {
    setError((error) => ({ ...error, otp: "OTP must be 6 characters" }));
    return true;
  } else {
    setError((error) => ({ ...error, otp: "" }));
  }

  if (otp.toString() !== otpPin.otp.toString()) {
    setError((error) => ({ ...error, otp: "OTP is invalid or expired" }));
    return true;
  } else {
    setError((error) => ({ ...error, otp: "" }));
  }

  if (!password.trim()) {
    setError((error) => ({
      ...error,
      password: "password must be at least 6 characters long",
    }));
    return true;
  } else {
    setError((error) => ({ ...error, password: "" }));
  }

  if (confirmPassword.trim() !== password.trim()) {
    setError((error) => ({
      ...error,
      confirmPassword: "passwords do not match",
      password: "passwords do not match",
    }));
    return true;
  } else {
    setError((error) => ({ ...error, confirmPassword: "", otp: "" }));
  }
};

export const errorOtp = (otp, token, setError) => {
  if (!otp.trim()) {
    setError((errors) => ({ ...errors, otp: "OTP cannot be empty!" }));
    return true;
  } else {
    setError((errors) => ({ ...errors, otp: "" }));
  }

  if (otp.trim().length < 7 || otp.trim().length > 7) {
    setError((errors) => ({ ...errors, otp: "OTP must be 7 digits!" }));
    return true;
  } else {
    setError((errors) => ({ ...errors, otp: "" }));
  }

  if (otp != token) {
    setError((errors) => ({ ...errors, res: "OTP expired or is incorrect!" }));
    return true;
  } else {
    setError((errors) => ({ ...errors, res: "" }));
  }
};
