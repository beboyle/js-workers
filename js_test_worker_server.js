// onmessage gets executed for every postMessage from client
onmessage = function(e) {
    // Simply parrot back what worker was told
    postMessage("You said: " + e.data + " (echoed by 1st worker)");

}
