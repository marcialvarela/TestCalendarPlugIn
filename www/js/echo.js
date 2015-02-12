window.echo = function(str, callback) {
    alert('entra en window.echo');
    cordova.exec(
        callback,
        function(err) { callback('Nothing to echo.'); },
        "Echo",
        "echo",
        [str]
    );
    alert('echo.js: sale de window.echo');
};
