export const getInitials = (string) => {
  let stringArr = string.split(" ");

  let initialOne = stringArr[0].slice(0, 1);
  let initialTwo = stringArr[1].slice(0, 1);

  return initialOne + initialTwo;
};
