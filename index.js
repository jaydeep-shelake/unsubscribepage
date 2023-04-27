//Should be true only if your server is url encoding the URL on unsubscribe landing page
    var isReEncode = false
    // on  page load, fetch the email id of the user.
    window.onload = function() {
        console.log("FUNCTION",$WZRK_WR)
        $WZRK_WR.getEmail(isReEncode);
    };
    // will be called after the email id of the user has been fetched
    function wzrk_email_fetched(emailStr) {
        console.log("EMAIL___",emailStr)
        document.getElementById("email").value = emailStr;
    }
    // will be called after the subscription preferences for the user have been updated
    function wzrk_email_subscription(status) {
        //status 0 : unsubscribed, status 1 : subscribed
        // todo - you can show a success message to the user from here
        var statusLabel = 'subscribed';
        if (status == 0) {
            statusLabel = 'unsubscribed';
        }
        alert("You've been " + statusLabel);
    }
    // call this function to unsubscribe the user
    function unsubscribe(isReEncode) {
        $WZRK_WR.unSubEmail(isReEncode);
    }
    // call this function to resubscribe the user
    function resubscribe(isReEncode) {
        $WZRK_WR.subEmail(isReEncode);
    }