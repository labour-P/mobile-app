const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

export const currentDate = `${day}-${month}-${year}`;

let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

export const currentTime = `${hours}:${minutes}:${seconds}`;
