Angular Fibonacci
=================

Do you need to poll data from your server but you don't want to poll with a fixed interval? Angular Fibonacci is here to help!

##What is Angular Fibonacci?
Angular Fibonacci is a tiny AngularJS Service that lets you poll your server using timeouts according to the [Fibonacci series](http://en.wikipedia.org/wiki/Fibonacci_number). Instead of polling every, say 5, seconds, with Angular Fibonacci, you can poll in 2, 3, 5, 8, 13, ... second intervals! Also, whenever you detect a change in the data you polled, you can simply call ```Fibonacci.restart()``` to restart the series. So if you think your environment can benefit from Fibonacci-polling, use Angular Fibonacci!  

##Installation
* Download the file manually from GitHub or use [Bower](http://bower.io/):

```bower install fibonacci-angular```

* Make sure you add a reference to the Fibonacci service:

