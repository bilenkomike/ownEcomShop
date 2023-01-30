export const withWorkDuration = (time: string) => {
  const dateString = Date.parse("2022-12-12 " + time);
  const hours = new Date(dateString).getHours();
  return hours;
};
