var ordinal = function(mday) {
    var strMday = String(mday);
    var determinator = strMday[strMday.length - 1];

    if (determinator == '1') {
        return strMday + "st";
    } else if (determinator == '2') {
        return strMday + "nd";
    } else if (determinator == '3') {
        return strMday + "rd";
    } else {
        return strMday + "th";
    }
}

var thatReallyBadTimeFunction = function(date) {
    // http://swizec.com/blog/javascripts-lack-of-strftime/swizec/3164
    var months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
        'November', 'December' ];
    var weekdays = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];

    return weekdays[date.getDay()] + ", " +
        months[date.getMonth()] + " " +
        ordinal(date.getDate()) + ", " + (1900 + date.getYear());
}

var toLocalTime = function(date) {
    var tzOffset = new Date().getTimezoneOffset() * 60 * 1000;  // Get user's timezone offset, convert to milliseconds
    return new Date(Date.parse(date) + tzOffset);               // Parse date (UTC), convert to local time
}

var updateMeeting = function() {
    // Get all meetings
    var meetings = [{"date":"2016-10-18","speaker":"Wes from CoverMyMeds","topic":"React (JavaScript Framework)"},{"date":"2016-10-25","speaker":"Paul Tela (subject to change)","topic":"Backend Stuff"},{"date":"2016-11-01","speaker":"Shaffan Mustafa","topic":"Website Maintenance, You Can Do It Too!"},{"date":"2016-11-08","speaker":"unknown","topic":"Intro to GIS (tentative)"},{"date":"2016-11-17","speaker":"Glowing Pumpkin","topic":"Oktoberfest"},{"date":"2016-11-29","speaker":"J3RN","topic":"Fuck you"}];
    // Find the next meeting whose datetime, based on the end-of-day, is greater than the current datetime
    var nextMeeting = meetings.find(function(e) {
        return toLocalTime(e.date + "T23:59:59") >= new Date();
    });

    // If such a meeting is found, display it
    if (nextMeeting) {
        document.getElementById("next-meeting-date").innerHTML =
            thatReallyBadTimeFunction(toLocalTime(nextMeeting.date));
        document.getElementById("meeting-topic").innerHTML = nextMeeting.topic;
        document.getElementById("meeting-speaker").innerHTML = nextMeeting.speaker;
    }
}

document.addEventListener("DOMContentLoaded", updateMeeting);
