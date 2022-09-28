import isEmail from "validator/lib/isEmail";

export const nameError = ({ firstName, lastName }, setError) => {
  if (!firstName.trim()) {
    setError((error) => ({
      ...error,
      firstName: "first name cannot be empty",
    }));
    return true;
  } else {
    setError((error) => ({ ...error, firstName: "" }));
  }

  if (!lastName.trim()) {
    setError((error) => ({
      ...error,
      lastName: "last name cannot be empty",
    }));
    return true;
  } else {
    setError((error) => ({ ...error, lastName: "" }));
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

  if (phone.length < 11 || phone.length > 11) {
    setError((error) => ({
      ...error,
      phone: "please input a valid phone number",
    }));
    return true;
  } else {
    setError((error) => ({ ...error, phone: "" }));
  }

  if (!isEmail(email)) {
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
  if (!isEmail(email)) {
    setError((error) => ({
      ...error,
      email: "please input a valid email",
    }));
    return true;
  } else {
    setError((error) => ({ ...error, email: "" }));
  }

  if (password.length < 6) {
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

export const dobError = ({ formattedDate }, age, setError) => {
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
  if (!username) {
    setError((error) => ({ ...error, username: "Please select a username" }));
    return true;
  } else {
    setError((error) => ({ ...error, username: "" }));
  }

  if (!password) {
    setError((error) => ({
      ...error,
      password: "password must be at least 6 characters long",
    }));
    return true;
  } else {
    setError((error) => ({ ...error, password: "" }));
  }

  if (confirmPassword !== password) {
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
