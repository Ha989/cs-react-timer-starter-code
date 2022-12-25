export const formatTime = (time) => {
  const seconds = `${time % 60}`;
  const getSeconds = `0${seconds}`.slice(-2);
  const minutes = `${Math.floor(time/60)}`;
  const getMinutes = `0${minutes % 60}`.slice(-2);
  const getHours = `0${Math.floor(time/3600)}`;

  return `${getHours} : ${getMinutes} : ${getSeconds}`;
};
