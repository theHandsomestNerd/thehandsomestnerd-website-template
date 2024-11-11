import {addMonths, format, intervalToDuration} from "date-fns"

/**
 * Returns the year in numeric form MMM yyyy
 * @param {string} inputDate : "First Date in the format YYYY-MM-DD"
 * @returns {string}
 */
const monthYear = (inputDate?: string): string => inputDate ? format(addMonths(inputDate, 1), 'MMM yyyy') : ""

/**
 * Returns the year in numeric form MM/dd/yyyy
 * @param {string} inputDate : "First Date in the format YYYY-MM-DD"
 * @returns {string}
 */
const monthDateYear = (inputDate?: string): string => inputDate ? format(addMonths(inputDate, 1), 'MM/dd/yyyy') : ""

/**
 * Returns the year in numeric form 2024
 *
 * @param {string} inputDate : "First Date in the format YYYY-MM-DD"
 * @returns {string} xx years xx months
 *
 * @example
 * const formattedString = yearNumeric("2024-11-11")
 *
 * console.log(formattedString) // Output 2024
 *
 */
const yearNumeric = (inputDate?: string): string => inputDate ? format(addMonths(inputDate, 1), 'yyyy') : ""

/**
 * Calculates the difference between two dates and returns in years and months
 * @param {string} inputDateStart : "First Date in the format MM-DD-YYYY"
 * @param {string} inputDateEnd : "Second Date in the format MM-DD-YYYY"
 * @param {string} isUseTodayAsEndDate : use today's date as the endDate
 * @returns {string}
 *
 * @example
 * console.log(getLengthOfTime("2022-01-01", "2024-03-01")) // Output 2 years 2 months
 *
 */
const getLengthOfTime = (inputDateStart: string | undefined, inputDateEnd: string | undefined, isUseTodayAsEndDate?: boolean): string => {
    const dateStart: Date | "" = inputDateStart ? addMonths(new Date(inputDateStart), 1) : ""
    let dateEnd: Date | "" = ""

    if (isUseTodayAsEndDate) {
        dateEnd = new Date();
    } else {
        dateEnd = inputDateEnd ? addMonths(new Date(inputDateEnd), 1) : ""
    }

    const {years: durationYears, months: durationMonths}
        = intervalToDuration({start: dateStart, end: dateEnd ? dateEnd : ""})

    const durationYearUnit = 'year' + (durationYears !== 1 ? 's' : '')
    const durationMonthUnit = 'month' + (durationMonths !== 1 ? 's' : '')

    return (durationYears ? `${durationYears} ${durationYearUnit}` : '') + (durationMonths ? ` ${durationMonths} ${durationMonthUnit}` : "")
}

export default {monthYear, yearNumeric, getLengthOfTime, monthDateYear}