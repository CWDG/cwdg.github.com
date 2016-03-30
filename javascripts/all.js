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
    var meetings = [{"date":"2016-01-12","topic":"Welcome back and Auxiliary Election","speaker":"Jonathan Arnett"},{"date":"2016-01-19","topic":"Neural networks and handwriting recognition","speaker":"John Simerlink"},{"date":"2016-01-26","topic":"Meteor","speaker":"Alex Fuhr"},{"date":"2016-02-02","topic":"Twitter for Dogs in 30 Minutes or Less","speaker":"Jonathan Arnett"},{"date":"2016-02-09","topic":"jQuery","speaker":"Marwan Nakhaleh"},{"date":"2016-02-16","topic":"Git and GitHub","speaker":"Mark Tareshawty"},{"date":"2016-02-23","topic":"???","speaker":"???"},{"date":"2016-03-01","topic":"Elections","speaker":"Jonathan Arnett"},{"date":"2016-03-08","topic":"???","speaker":"???"},{"date":"2016-03-22","topic":"Web Technology Comparison","speaker":"Rob Kinyon"},{"date":"2016-03-29","topic":"???","speaker":"???"},{"date":"2016-04-05","topic":"???","speaker":"???"},{"date":"2016-04-12","topic":"???","speaker":"???"},{"date":"2016-04-19","topic":"???","speaker":"???"}];
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
