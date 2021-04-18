var moment = require('moment-hijri');
moment().format('iYYYY/iM/iD');


function main(date, dateType) {
    console.log(date, dateType)
    let x, y = moment()
    if (dateType === 'hijri') x = moment(date, "iYYYY-iM-iD")
    else x = moment(date, "YYYY-MM-DD")
    return moment.duration(y.diff(x))
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

export { main }