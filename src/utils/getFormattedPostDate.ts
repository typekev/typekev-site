const options: Intl.DateTimeFormatOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "2-digit",
};

export const getFormattedPostDate = (timestamp: number, locale?: string) =>
  new Date(timestamp * 1000).toLocaleDateString(locale, options);
