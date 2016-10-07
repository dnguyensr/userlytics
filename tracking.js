$(document).ready(function() {
    console.log("Script loaded!");
    var pageLoad = (pageLoad === undefined) ? 1 : x+1;    var buttonClicks = (buttonClicks === undefined) ? 0 : x;
    var buttonClicked = "BUTTONCLICKS-0"
    var apiUrl = 'someurl';
    $("body").on("click", "#tracker", function(){
        // console.log("Button clicked");
        buttonClicks += 1;
        buttonClicked = "BUTTONCLICKS-" + buttonClicks;
        console.log(buttonClicked + ", " + apiUrl);
        sendData(apiUrl);
    });
    sendData(apiUrl);
    var here = $(this);

    function sendData(URL){
        var userData = "PAGELOAD-" + pageLoad + "," + buttonClicked;
        $.ajax({
            url: URL,
            type: 'POST',
            data: JSON.stringify(userData),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            async: false,
            success: function(msg){
                here.find('div').append("<p>Ajax sent</p>")
            }
        })
    };
});