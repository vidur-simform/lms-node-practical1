const timeZones = require('../data/timzones.json');

//tz -> time zone
exports.converter = (currentTimezone, convertToTimezone, currentTime) => {
    currentTimezoneOffset = timeZones.find(tz => tz.abbr == currentTimezone).offset;
    convertToTimezoneOffset = timeZones.find(tz => tz.abbr == convertToTimezone).offset;
    convertToTimezoneOffsetFromCurrentTz = convertToTimezoneOffset - currentTimezoneOffset;

    //temporary date object for time calculations
    const tmpDate = new Date(`01/01/2000 ${currentTime}`);

    const timeDiff = convertToTimezoneOffsetFromCurrentTz * 60 * 60 * 1000;

    // add the time difference (in milliseconds) in the old time and form the date
    tmpDate.setTime(tmpDate.getTime() + timeDiff);

    // convert the result back to a string in the desired format
    const convertedTime = tmpDate.toLocaleTimeString('en-US',
        {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        });
    return convertedTime;
}
