import { Type } from "../generator/const";
import _ from "lodash";
import { DateTime, DateTimeFormatOptions } from "luxon";

const now = new Date().toISOString();

const isTimestamp = (value: string): boolean => {
  return Boolean(_.isNumber(value) && new Date(value * 1000));
};

const formatDate = (value: string, format: DateTimeFormatOptions): string => {
  const timestamp = isTimestamp(value);
  return timestamp || Date.parse(value)
    ? DateTime.fromISO(
        new Date(timestamp ? +value * 1000 : value).toISOString()
      ).toLocaleString(format)
    : value;
};

export enum DateFormatOptions {
  DD_MM_YYYY = "DD_MM_YYYY",
  DD_MM_YY = "DD_MM_YY",
  HH_MM = "HH_MM",
  HH_MM_SS = "HH_MM_SS",
  DD_MM_YYYY_HH_MM_SS = "DD_MM_YYYY_HH_MM_SS",
  DD_MM_YY_HH_MM_SS = "DD_MM_YY_HH_MM_SS",
  DD_MM_YYYY_HH_MM = "DD_MM_YYYY_HH_MM",
  DD_MM_YY_HH_MM = "DD_MM_YY_HH_MM",
}

export enum DatePickers {
  DATE = "DATE",
  TIME = "TIME",
  DATE_TIME = "DATE_TIME",
}

export const DateFormatOptionsPicker: Record<string, DatePickers> = {
  DD_MM_YYYY: DatePickers.DATE,
  DD_MM_YY: DatePickers.DATE,
  HH_MM: DatePickers.TIME,
  HH_MM_SS: DatePickers.TIME,
  DD_MM_YYYY_HH_MM_SS: DatePickers.DATE_TIME,
  DD_MM_YY_HH_MM_SS: DatePickers.DATE_TIME,
  DD_MM_YYYY_HH_MM: DatePickers.DATE_TIME,
  DD_MM_YY_HH_MM: DatePickers.DATE_TIME,
};

export const FormatOptions: Record<string, DateTimeFormatOptions> = {
  [DateFormatOptions.DD_MM_YYYY]: {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  },
  [DateFormatOptions.DD_MM_YY]: {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  },
  [DateFormatOptions.HH_MM]: { hour: "2-digit", minute: "2-digit" },
  [DateFormatOptions.HH_MM_SS]: {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  },
  [DateFormatOptions.DD_MM_YYYY_HH_MM_SS]: {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  },
  [DateFormatOptions.DD_MM_YY_HH_MM_SS]: {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  },
  [DateFormatOptions.DD_MM_YYYY_HH_MM]: {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  },
  [DateFormatOptions.DD_MM_YY_HH_MM]: {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  },
} as const;

enum NumberFormatOptions {
  INT = "INT",
  FLOAT_1_DEC = "FLOAT_1_DEC",
  FLOAT_2_DEC = "FLOAT_2_DEC",
}

enum BooleanFormatOptions {
  TRUE_FALSE = "TRUE_FALSE",
  YES_NO = "YES_NO",
  PLUS_MINUS = "PLUS_MINUS",
  ONE_ZERO = "ONE_ZERO",
}

enum StringFormatOptions {
  UPPERCASE = "UPPERCASE",
  LOWERCASE = "LOWERCASE",
  CAPITALIZE = "CAPITALIZE",
}

export const DefaultFormatOption = {
  value: "default",
  label: "Default",
};

export const DateFormats = Object.fromEntries(
  Object.entries(FormatOptions).map(([key, option]) => [
    key,
    formatDate(now, option),
  ])
);

export const NumberFormats: Record<NumberFormatOptions, string> = {
  [DefaultFormatOption.value]: DefaultFormatOption.label,
  [NumberFormatOptions.INT]: "Integer",
  [NumberFormatOptions.FLOAT_1_DEC]: "1 decimal place",
  [NumberFormatOptions.FLOAT_2_DEC]: "2 decimal places",
};

export const BooleanFormats: Record<BooleanFormatOptions, string> = {
  [BooleanFormatOptions.TRUE_FALSE]: "True / False",
  [BooleanFormatOptions.YES_NO]: "Yes / No",
  [BooleanFormatOptions.PLUS_MINUS]: "+ / -",
  [BooleanFormatOptions.ONE_ZERO]: "1 / 0",
};

export const StringFormats: Record<StringFormatOptions, string> = {
  [DefaultFormatOption.value]: DefaultFormatOption.label,
  [StringFormatOptions.UPPERCASE]: "Uppercase",
  [StringFormatOptions.LOWERCASE]: "Lowercase",
  [StringFormatOptions.CAPITALIZE]: "Capitalize",
};

export const Formats: Record<string, Record<string, string>> = {
  [Type.DATE]: DateFormats,
  [Type.NUMBER]: NumberFormats,
  [Type.BOOLEAN]: BooleanFormats,
  [Type.STRING]: StringFormats,
};

export const Formatters: Record<
  string,
  Record<string, (value: string) => string>
> = {
  [Type.DATE]: Object.fromEntries(
    Object.entries(FormatOptions).map(([key, option]) => [
      key,
      (value) => formatDate(value, option),
    ])
  ),
  [Type.NUMBER]: {
    [NumberFormatOptions.INT]: (value) => {
      return _.isNumber(value) ? Math.round(value).toString() : value;
    },
    [NumberFormatOptions.FLOAT_1_DEC]: (value) => {
      return _.isNumber(value)
        ? (Math.round(value * 10) / 10).toFixed(1)
        : value;
    },
    [NumberFormatOptions.FLOAT_2_DEC]: (value) => {
      return _.isNumber(value)
        ? (Math.round(value * 100) / 100).toFixed(2)
        : value;
    },
  },
  [Type.BOOLEAN]: {
    [BooleanFormatOptions.TRUE_FALSE]: (value) => {
      return value ? "True" : "False";
    },
    [BooleanFormatOptions.YES_NO]: (value) => {
      return value ? "Yes" : "No";
    },
    [BooleanFormatOptions.PLUS_MINUS]: (value) => {
      return value ? "+" : "-";
    },
    [BooleanFormatOptions.ONE_ZERO]: (value) => {
      return value ? "1" : "0";
    },
  },
  [Type.STRING]: {
    [StringFormatOptions.UPPERCASE]: (value) => {
      return value.toUpperCase();
    },
    [StringFormatOptions.LOWERCASE]: (value) => {
      return value.toLowerCase();
    },
    [StringFormatOptions.CAPITALIZE]: (value) => {
      return value
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    },
  },
};

export const DefaultOptions: Record<string, string> = {
  [Type.BOOLEAN]: BooleanFormatOptions.TRUE_FALSE,
  [Type.DATE]: DateFormatOptions.DD_MM_YYYY_HH_MM,
  [Type.NUMBER]: DefaultFormatOption.value,
  [Type.STRING]: DefaultFormatOption.value,
};
