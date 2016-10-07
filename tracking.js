$(document).ready(function() {
    console.log("Script loaded!");
    var pageLoad = (pageLoad === undefined) ? 1 : pageLoad+1;
    var buttonClicks = (buttonClicks === undefined) ? 0 : buttonClicks;
    var buttonClicked = "BUTTONCLICKS-0"
    var apiUrl = 'someurl';
    $("body").on("click", "#tracker", function(){
        buttonClicks += 1;
        buttonClicked = "BUTTONCLICKS-" + buttonClicks;
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
            success: function(msg){
                alert(msg);
            }
        })
    };
});