import { DateTime } from "luxon";

export enum DateFormat {
  MM_dd_yy = "MM/dd/yy",
  MM_dd_yyyy = "MM/dd/yyyy",
  yyyy_MM_dd = "yyyy-MM-dd",
}

export const DateFormats: Record<DateFormat, string> = {
  [DateFormat.MM_dd_yy]: "MM/dd/yy",
  [DateFormat.MM_dd_yyyy]: "MM/dd/yyyy",
  [DateFormat.yyyy_MM_dd]: "yyyy-MM-dd",
};

// format date
export const dateFormatter = (value: string, template: string) => {
  return DateTime.fromISO(value).toFormat(template);
};

export const dateIsValid = (date: Date) => {
  const time = date.getTime();
  return !isNaN(time);
};
