export const weekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const calculateTimesArray = () => {
  const x = 30;
  const times = [];
  const ap = ['am', 'pm'];
  let tt = 0;

  for (let i = 0; tt < 24 * 60; i++) {
    const hh = Math.floor(tt / 60);
    const mm = tt % 60;
    times[i] =
      ('0' + (hh % 12)).slice(-2) +
      ':' +
      ('0' + mm).slice(-2) +
      ap[Math.floor(hh / 12)];
    tt = tt + x;
  }

  return times;
};

export const timesArray = () => {
  return calculateTimesArray();
};
