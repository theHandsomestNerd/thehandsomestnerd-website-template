const YearMonth = (date?:Date) =>{
    if(!date) return ""
    return new Date(date).toLocaleDateString('en-us', { year:"numeric", month:"short"})
}

const MonthYear = (date?: Date | string | undefined) =>{
    if(!date) return ""
    return new Date(date).toLocaleDateString('en-us', { month:"short", year:"numeric"})
}

const MonthDateYear = (date?: Date | string | undefined) =>{
    if(!date) return ""
    return new Date(date).toLocaleDateString('en-us', { month:"numeric", day:"2-digit", year:"numeric"})
}

const YearNumeric = (date?: Date | string | undefined) =>{
    if(!date) return ""
    return new Date(date).toLocaleDateString('en-us', { year:"numeric"})
}
const getLengthOfTime = (date1?: Date|string, date2?: Date|string) =>{
    /*
    * calcDate() : Calculates the difference between two dates
    * @date1 : "First Date in the format MM-DD-YYYY"
    * @date2 : "Second Date in the format MM-DD-YYYY"
    * return : Array
    */

    if(!date1 || !date2)
        return {
            "total_days": 0,
            "result": ""
        }
    //new date instance
    const dt_date1 = new Date(date1);
    const dt_date2 = new Date(date2);

    //Get the Timestamp
    const date1_time_stamp = dt_date1.getTime();
    const date2_time_stamp = dt_date2.getTime();

    let calc;

    //Check which timestamp is greater
    if (date1_time_stamp > date2_time_stamp) {
        calc = new Date(date1_time_stamp - date2_time_stamp);
    } else {
        calc = new Date(date2_time_stamp - date1_time_stamp);
    }
    //Retrieve the date, month and year
    const calcFormatTmp = calc.getDate() + '-' + (calc.getMonth() + 1) + '-' + calc.getFullYear();
    //Convert to an array and store
    const calcFormat = calcFormatTmp.split("-");
    //Subtract each member of our array from the default date
    const days_passed = Number(Math.abs(parseInt(calcFormat[0])) - 1);
    let months_passed = Number(Math.abs(parseInt(calcFormat[1])) - 1);
    let years_passed = Number(Math.abs(parseInt(calcFormat[2])) - 1970);

    if(days_passed > 15){
        months_passed+=1;
        if(months_passed >= 13) {
            years_passed += 1;
            months_passed -= 1;
        }
    }

    //Set up custom text
    const yrsTxt = ["year", "years"];
    const mnthsTxt = ["month", "months"];
    // const daysTxt = ["day", "days"];

    //Convert to days and sum together
    const total_days = (years_passed * 365) + (months_passed * 30.417) + days_passed;

    //display result with custom text
    const result = ((years_passed === 1) ? years_passed + ' ' + yrsTxt[0] + ' ' : (years_passed > 1) ?
            years_passed + ' ' + yrsTxt[1] + ' ' : '') +
        ((months_passed === 1) ? months_passed + ' ' + mnthsTxt[0] : (months_passed > 1) ?
            months_passed + ' ' + mnthsTxt[1] + ' ' : '')
        // ((days_passed == 1) ? days_passed + ' ' + daysTxt[0] : (days_passed > 1) ?
        //     days_passed + ' ' + daysTxt[1] : '')
    ;

    //return the result
    return {
        "total_days": Math.round(total_days),
        "result": result.trim()
    }
}

export default {YearMonth, MonthYear, YearNumeric, getLengthOfTime, MonthDateYear}