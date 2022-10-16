export const truncate = (text, num) => {
  if (text.length > num) {
    let newText = text.slice(0, num);
    return `${newText}...`;
  } else {
    return text;
  }
};
