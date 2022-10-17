export default function dateConvertor(od) {
  const date = new Date(od);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const dt = date.getDate();
  const hours = date.getHours();
  const minute = date.getMinutes();

  const day = dt < 10 ? "0" + dt : dt;
  const mon = month < 10 ? "0" + month : month;
  const hou = hours < 10 ? "0" + hours : hours;
  const min = minute < 10 ? "0" + minute : minute;

  return hou + ":" + min + " " + day + "/" + mon + "/" + year;
}
