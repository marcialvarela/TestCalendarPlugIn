var calendarPlugin = {
    createEvent: function(title, location, notes, startDate, endDate, successCallback, errorCallback) {
        try{
            alert('js:calendarPlugin: entra try');
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
        catch (ex) {
            alert("calendarPlugin.createEvent error: "+ex.message);
        }

     }
}
module.exports = calendarPlugin;