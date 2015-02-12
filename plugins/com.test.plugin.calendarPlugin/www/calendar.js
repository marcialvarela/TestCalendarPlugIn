var calendarPlugin = {
    createEvent: function(title, location, notes, startDate, endDate, successCallback, errorCallback) {
        cordova.exec(
            successCallback,
            errorCallback,
            'calendarPlugin',
            'addCalendarEntry',
            [{
                "title": title,
                "description": notes,
                "eventLocation": location,
                "startTimeMillis": startDate.getTime(),
                "endTimeMillis": endDate.getTime()
            }]
        ); 
     }
}
module.exports = calendarPlugin;