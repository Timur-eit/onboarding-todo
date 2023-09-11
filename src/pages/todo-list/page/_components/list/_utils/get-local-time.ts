export const getLocalTime = (utcTime: string): string =>
  new Date(utcTime).toLocaleString();
