export const getAge = ({ year, month, day }) => {
  let time = new Date();
  let _year = time.getFullYear();
  let _month = time.getMonth() + 1;
  let _day = time.getDate();

  let age = _year - year;

  if (_month > month) {
    return age;
  }

  if (_month === month && _day >= day) {
    return age;
  }

  return age - 1;
}