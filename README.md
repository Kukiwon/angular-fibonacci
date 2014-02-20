Angular Fibonacci
=================

Do you need to poll data from your server but you don't want to poll with a fixed interval? Angular Fibonacci is here to help!

##What is Angular Fibonacci?
Angular Fibonacci is a tiny AngularJS Service that lets you poll your server using timeouts according to the [Fibonacci series](http://en.wikipedia.org/wiki/Fibonacci_number). Instead of polling every, say 5, seconds, with Angular Fibonacci, you can poll in 2, 3, 5, 8, 13, ... second intervals! Also, whenever you detect a change in the data you polled, you can simply call ```Fibonacci.restart()``` to restart the series. So if you think your environment can benefit from Fibonacci-polling, use Angular Fibonacci!  

##Installation
* Download the file manually from GitHub or use [Bower](http://bower.io/):

```bower install angular-fibonacci```

* Make sure you add a reference to the Fibonacci service:

```html
<!-- Application Services -->
<script type="text/javascript" src="public/lib/angular-fibonacci/fibonacci.js"></script>
```

* Then load the module:
``` angular.module('angular-fibonacci', []); ```

## Usage

Add the *Fibonacci* dependency to your controller like so:

```javascript
angular.module('myModule').controller('MyController', ['$scope', 'Fibonacci',
	function ($scope, Fibonacci) {
	  ...
}]);
```

Then use start polling with a callback, like so:

```javascript
Fibonacci.start({
  callback: function() {
    // called on 1, 2, 3, 5, 8,... seconds
    console.log('polling the server');
  }
});
```
### Options

| Property                | Description          |
| ------------------------|:-------------:|
| max                     | maximum number of steps into the Fibonacci Series (default: 5) |
| callback (required)     | this function gets called whenever a timer ends that is set to one of the elements in the Fibonacci series, so after: 1, 2, 3, 5, 8, ... seconds |
