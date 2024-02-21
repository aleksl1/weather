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