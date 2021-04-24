var moment = require('moment-hijri');
var _ = require('lodash');
moment().format('iYYYY/iM/iD');


let words = {
    "days": "يوم",
    "years": "سنة",
    "months": "شهر",
    "minutes": "دقيقة",
    "hours": "ساعة",
    "seconds": "ثانية"
}


function main(date, dateType) {
    // console.log(date, dateType)
    let x, y = moment()
    if (dateType === 'hijri') x = moment(date, "iYYYY-iM-iD")
    else x = moment(date, "YYYY-MM-DD")


    let diff = moment.duration(y.diff(x))

    let higiriAge = _.cloneDeep(diff)

    let YearDiff = y.iYear() - x.iYear(), MonthDiff = y.iMonth() - x.iMonth(), DayDiff = y.iDate() - x.iDate()
    higiriAge._data.years = YearDiff - (MonthDiff < 0 ? 1 : 0)
    higiriAge._data.months = (MonthDiff + 12) % 12 - (DayDiff < 0 ? 1 : 0)
    higiriAge._data.days = (DayDiff + 30) % 30
    return { gregAge: diff, higiriAge, timeDiff: y.diff(x) }
}

function BirthdayRemaining(date, dateType) {
    let x, y = moment()
    if (dateType === 'hijri') x = moment(date, "iYYYY-iM-iD")
    else x = moment(date, "YYYY-MM-DD")

    x.year(y.year());
    let diff = moment.duration(x.diff(y))

    if (diff._milliseconds < 0) {
        x.year(y.year()+1);     
    }
    return moment.duration(x.diff(y))


}

function ConvertAgeDiffToString(age) {
    let x = ""
    let keys = Object.keys(age).reverse()


    for (let i of keys) {


        if (words[i] && age[i]) {
            x += age[i] + " " + words[i] + " و "
        }
    }




    x = x.slice(0, x.length - 3)
    return x

}

function ArabicMonths() {
    return [
        { text: "محرم", value: 1 },
        { text: "صفر", value: 2 },
        { text: "ربيع الأول", value: 3 },
        { text: "ربيع الثاني", value: 4 },
        { text: "جمادى الأولى", value: 5 },
        { text: "جمادى الآخرة", value: 6 },
        { text: "رجب", value: 7 },
        { text: "شعبان", value: 8 },
        { text: "رمضان", value: 9 },
        { text: "شوال", value: 10 },
        { text: "ذو القعدة", value: 11 },
        { text: "ذو الحجة", value: 12 },
    ]
}

function ArabicGregMonths() {
    return [
        { text: "يناير", value: 1 },
        { text: "فبراير", value: 2 },
        { text: "مارس", value: 3 },
        { text: "آبريل", value: 4 },
        { text: "مايو", value: 5 },
        { text: "يونيو", value: 6 },
        { text: "يوليو", value: 7 },
        { text: "آغسطس", value: 8 },
        { text: "سبتمبر", value: 9 },
        { text: "أكتوبر", value: 10 },
        { text: "نوفمبر", value: 11 },
        { text: "ديسمبر", value: 12 },
    ]
}



// let m = moment('1410/8/28', 'iYYYY/iM/iD'); // Parse a Hijri date.
// m.format('iYYYY/iM/iD [is] YYYY/M/D'); // 1410/8/28 is 1990/3/25

// // console.log(m.iYear() ) // 1410
// m.iMonth(); // 7
// m.iDate(); // 28
// m.iDayOfYear(); // 236
// m.iWeek(); // 35
// m.iWeekYear(); // 1410

// m.add(1, 'iYear');
// m.add(2, 'iMonth');
// m.format('iYYYY/iM/iD'); // 1411/10/28

// m.iMonth(11);
// m.startOf('iMonth');
// m.format('iYYYY/iM/iD'); // 1411/12/1

// m.iYear(1392);
// m.startOf('iYear');
// m.format('iYYYY/iM/iD'); // 1420/1/1

// moment('1436/1/30', 'iYYYY/iMM/iDD').isValid(); // false (This month is only 29 days).
// moment('1436/2/30', 'iYYYY/iMM/iDD').isValid(); // true (This month is 30 days).

// moment('1436/2/6 16:40', 'iYYYY/iM/iD HH:mm').format('YYYY-M-D HH:mm:ss'); // 2014-11-28 16:40:00

// moment('2014-11-28 16:40:00', 'YYYY-M-D HH:mm:ss').endOf('iMonth').format('iYYYY/iM/iD HH:mm:ss'); // 1436/2/30 23:59:59

// // Complex parse:
// moment('1990 5 25', 'YYYY iM D').format('YYYY/MM/DD'); // 1990/03/25

export { main, ConvertAgeDiffToString, ArabicMonths, ArabicGregMonths, BirthdayRemaining }