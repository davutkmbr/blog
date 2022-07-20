export const localeDate = (date: string) => {
  return new Date(date).toLocaleString("default", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};
