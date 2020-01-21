import { DateTime } from 'luxon';

function getLuxonDate(dt = null, offsetMins = 0) {
  let now = dt || (new Date().getTime() / 1000);
  const hrsOffset = offsetMins / (3600);

  return DateTime.fromSeconds(now).setZone(`UTC${hrsOffset >= 0 ? '+' : ''}${hrsOffset}`);
}

/**
 * Returns the the difference in days between now and the given timestamp in the local timezone.
 * e.g. if it is currently Tuesday locally and the timestamp is in the following Wednesday locally
 * then the value `1` will be returned.
 * @param {UNIX epoch timestamp in seconds } dt 
 * @param {Timezone offset in minutes} tzOffsetMins 
 */
export function getDaysOffset(dt, tzOffsetMins = 0) {
  const currentDate = getLuxonDate(null, tzOffsetMins);
  const date = getLuxonDate(dt, tzOffsetMins);
  const diff = date.startOf('day').diff(currentDate.startOf('day'), 'days');

  return diff.days;
}

/**
 * Returns the current day number in the given timezone. 1 is Monday and 7 is Sunday.
 * @param {Timezone offset in minutes} tzOffsetMins 
 */
export function getCurrentDayNumber(tzOffsetMins) {
  const now = getLuxonDate(null, tzOffsetMins);
  return now.weekday;
}

