import { DateTime } from 'luxon';

// format date
export const dateFormatter = (value: string, template: string) => {
  return DateTime.fromISO(value).toFormat(template);
};
