export const getFormattedDateFromTimestamp = (timestamp: number) => {
  const miliseconds = new Date(timestamp * 1000);
  return formatDateDDMM(miliseconds);
};

const formatDateDDMM = (date: Date) => {
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
  });
};

export const getFormattedTodayDate = () => {
  return new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",

  });
}

export const getFormattedTimeFromTimestamp = (timestamp: number) => {
  const miliseconds = new Date(timestamp * 1000);
  return miliseconds.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
}