import getUnixTime from 'date-fns/getUnixTime';
import fromUnixTime from 'date-fns/fromUnixTime';
import { format } from 'date-fns';
import parseString from 'date-fns/parse';
import vi from 'date-fns/locale/vi';

const dateToUnix = (date: any) => date && getUnixTime(date);

const unixTimeToDate = (timestamp: any) => timestamp && fromUnixTime(timestamp);

const toVietNameseDateTime = (timeString: any) =>
  format(new Date(timeString), 'cccc dd/MM/yyyy HH:mm:ss', {
    locale: vi,
  });

const toVietNameseDate = (timeString: any, formatting: string = 'dd/MM/yyyy') =>
  format(new Date(timeString), formatting, {
    locale: vi,
  });

const parseDateStringToDateObject = (
  dateString: string,
  format: string
): Date => parseString(dateString, format, new Date());

const parseDateObjectToDateString = (
  dateObject: Date,
  formatString: string
): string =>
  format(dateObject, formatString, {
    locale: vi,
  });

export {
  dateToUnix,
  unixTimeToDate,
  toVietNameseDateTime,
  toVietNameseDate,
  parseDateStringToDateObject,
  parseDateObjectToDateString,
};
