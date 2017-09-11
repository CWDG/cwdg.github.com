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
    var meetings = [{"date":"2017-08-29","speaker":"Sam Yinger","topic":"First Meeting"},{"date":"2017-09-05","speaker":"Sam Yinger","topic":"Introduction to Web Development Club"},{"date":"2017-09-12","speaker":"John Simerlink","topic":"Side Projects"},{"date":"2017-09-19","speaker":"Sam Yinger","topic":"What is backend development + what tools are used"},{"date":"2017-09-26","speaker":"Harris Corporation","topic":"Harris Corporation will be visiting to talk about what they do and how you could possible join them!"},{"date":"2017-10-03","speaker":"Sam Yinger","topic":"Starting your career / Landing an internship"},{"date":"2017-10-10","speaker":"Sam Yinger","topic":"???"},{"date":"2017-10-17","speaker":"Sam Yinger","topic":"Contributing to open source"},{"date":"2017-10-24","speaker":"Sam Yinger","topic":"Web development trends"},{"date":"2017-11-07","speaker":"Sam Yinger","topic":"Make money programming"},{"date":"2017-11-14","speaker":"Sam Yinger","topic":"Stripping web resources with python"},{"date":"2017-11-28","speaker":"Tom Scott (Youtube videos)","topic":"Web security"},{"date":"2017-12-05","speaker":"Sam Yinger","topic":"Senior sendoff / studying for finals /project help"}];
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
