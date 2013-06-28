// onmessage gets executed for every postMessage from client
onmessage = function(e) {
    // Simply parrot back what worker was told

  setTimeout(function() {
    postMessage("I'm hard of hearing and slow so I'll shout back: " + e.data.toUpperCase() + " (echoed by 2nd worker 2 secs later)")
	},2000);

} 
