var HelloPlugin = {
    callNativeFunction: function (success, fail, 	resultType)    {
        try{
            alert(success);
            alert(fail);
            /*alert('js:callNativeFunction ' +success);
             alert('js:callNativeFunction ' +fail);
             alert('js:callNativeFunction ' +resultType);
             */
            return cordova.exec(
                        success,
                        fail,
                        "HelloPlugin",
                        "nativeAction",
                        [resultType]);
        }
        catch (ex) {
            alert("HelloPlugin.callNativeFunction error: "+ex.message);
        }
    }
};

