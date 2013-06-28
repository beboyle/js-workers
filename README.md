js-workers
==========

demo for running scripts in the background independently of user interface scripts.


js_test_worker_client.html   
The client js page running in the foreground.
Using Chrome browser, inspect element and view the console log

js_test_worker_server.js   
1st worker in the background that does a simple echo

js_test_worker_server2.js   
2nd worker in the background that does an uppercase echo, delayed 2 seconds to simulate a more intensive background processing.
