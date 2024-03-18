import validator from 'validator'

import moment from 'moment-timezone'

// This was a direct import into the db from the old one
const firebaseDateFormatStr = 'YYYY-MM-DD';
const firebaseTimeFormatStrLong = 'hh:mm a';
const firebaseTimeFormatStr = 'hh:mm';

const prettyDateFormatStr = 'MMMM DD, YYYY';
const prettyDateFormatStrLong = 'dddd MMMM DD, YYYY';
const prettyDateFormatStrShort = 'M/DD/YYYY';

/**
 * This is how times are stored in Firebase
 */
export function getFirebaseTimeFormatString() {
  return firebaseTimeFormatStr;
}

/**
 * Get the Month from Date String
 * @param date
 */
export function getMonthFromDate(date: string): string {
  return new Date(date).toLocaleString('default', { month: 'short' });
}

/**
 * Print pretty a date from firebase date string
 * @param firebaseDate
 */
export function getPrettyDateStr(firebaseDate: string, long?: boolean, short?: boolean): string {
  const momentDate = moment(firebaseDate);
  let formatString = prettyDateFormatStr
  if (long) {
    formatString = prettyDateFormatStrLong
  } else if (short) {
    formatString = prettyDateFormatStrShort
  }

  return momentDate.format(formatString);
}

/**
 * Print pretty a time from time string
 * @param date string
 */
export function getPrettyTimeStr(date: string, long?: boolean): string {
  const momentTime = moment(date);
  return momentTime.format(long ? firebaseTimeFormatStrLong : firebaseTimeFormatStr);
}

/**
 * Print pretty a date from date string
 * @param date string
 */
export function getDateInputValue(date: string): string {
  if (!date || date === '' || date === '0000-00-00'){
    return '0000-00-00'
  }
  const momentTime = moment(date);
  return momentTime.format(firebaseDateFormatStr);
}

/**
 * Print pretty a date from time string
 * @param date string
 */
export function getTimeInputValue(time: string): string {
  if (time === '' || time === '00:00' || time === '0000-00-00T00:00Z'){
    return '00:00'
  }

  const momentTime = moment(time, firebaseTimeFormatStr).tz('America/New_York');
  return momentTime.format(firebaseTimeFormatStr);
}

/**
 * combine date and time into one string the datetime sanity component understands
 * @param date string
 */
export function combineDateTime(date: string, time: string): string {
  const dateTokenized = date !== undefined ? date.split('-') : []
  const timeTokenized = time !== undefined ? time.split(':') : []
  // const tz = new Date().toLocaleString('en', {timeZoneName: 'short'}).split(' ').pop();

  if (dateTokenized.length === 3) {
    const year = parseInt(dateTokenized[0], 10)
    const month = parseInt(dateTokenized[1], 10) - 1
    const day = parseInt(dateTokenized[2], 10)
    const hours = parseInt(timeTokenized[0], 10)
    const minutes = parseInt(timeTokenized[1], 10)

    const returned = !!hours && !!minutes ? new Date(year, month, day, hours, minutes) : new Date(year, month, day)

    return returned.toISOString()
  }

  return ''
}

export function combineDateAndTime(date: string, time: string): string {
  const dateTokenized = date !== undefined ? date.split('-') : []
  const timeTokenized = time !== undefined ? time.split(':') : []
  // const tz = new Date().toLocaleString('en', {timeZoneName: 'short'}).split(' ').pop();

  if (dateTokenized.length === 3) {
    const year = parseInt(dateTokenized[0], 10)
    const month = parseInt(dateTokenized[1], 10) - 1
    const day = parseInt(dateTokenized[2], 10)
    const hours = parseInt(timeTokenized[0], 10)
    const minutes = parseInt(timeTokenized[1], 10)

    const returned = !!hours && !!minutes ? new Date(year, month, day, hours, minutes) : new Date(year, month, day)

    return returned.toISOString()
  }

  return ''
}

export function tokenizeInputDateValue(inputDateValue: string){
  const dateTokenized = inputDateValue !== undefined ? inputDateValue.split('-') : []

  return {
    year: parseInt(dateTokenized[0], 10),
    month: parseInt(dateTokenized[1], 10) - 1,
    day: parseInt(dateTokenized[2], 10),
  }
}

export function tokenizeInputTimeValue(inputTimeValue: string){
  const timeTokenized = inputTimeValue !== undefined ? inputTimeValue.split(':') : []

  const result = {
    hours: parseInt(timeTokenized[0], 10),
    minutes: parseInt(timeTokenized[1], 10),
    modality: 'am',
  }

  if (result.hours > 12) {
    result.hours -= 12
    result.modality = 'pm'
  }

  return result
}

/**
 * This is how dates are stored in Firebase
 */
export function getFirebaseDateFormatString() {
  return firebaseDateFormatStr;
}

/**
 * Takes a long string and adds ellipses to the end to give the illusion that it has trailed off.
 * @param longString
 * @param numCharactersBeforeEllipse
 *
 * @returns {shortString: the shortened string, tooltip: the complete string for tooltip or link purposes}
 */
export function trailOffAfter(
  longString: string,
  numCharactersBeforeEllipse: number,
): { shortString: string; tooltip: string } {
  const isPrintEllipse = longString.length > numCharactersBeforeEllipse

  return {
    shortString: longString ? longString.substr(0, numCharactersBeforeEllipse).concat(isPrintEllipse ? '...' : '') : longString,
    tooltip: longString,
  };
}

/**
 * Create Select menu option Object Array
 *
 * @param values
 * @param titles
 * @param isEmptyOption
 */
export function enumCreateSelectOptions(
  values: any,
  titles: any,
  isEmptyOption?: boolean,
) {
  const options = Object.keys(values).map(value => ({
    value,
    label: titles[value],
  }));

  return isEmptyOption ? [{ value: '', label: '' }].concat(options) : options;
}

/**
 * Create Select menu option Object Array
 *
 * @param values
 * @param titles
 * @param isEmptyOption
 */
export function enumCreateSelectOptionsFromType(
  values: any,
  isEmptyOption?: boolean,
) {
  const options = Object.keys(values).map(value => ({
    value,
    label: values[value].valueOf(),
  }));

  return isEmptyOption === true ? [{ value: '', label: '' }].concat(options) : options;
}

/**
 * Create Select menu option Object Array from enum as object(REGIONS)
 *
 * @param values
 * @param titles
 * @param isEmptyOption
 */
export function objectCreateSelectOptions(
  values: any,
  titles: any,
  isEmptyOption?: boolean,
) {
  const options = Object.keys(values).map(value => ({
    value,
    label: titles[value],
  }));

  return isEmptyOption ? [{ value: '', label: '' }].concat(options) : options;
}

export const urlPatternValidation = (URL:string) =>
  validator.isURL(URL)

export const emailPatternValidation = (email:string) =>
  validator.isEmail(email)
