	'use strict';

angular.module('angular-fibonacci').factory('Fibonacci', ['$timeout', function($timeout) {
	return  {
		isPolling: false,
		series: [],
		index: 0,
		next: 1,
		max: 5,
		initialize: function(options) {
			this.series = [1];
			this.index = 0;
			this.next = 1;

			if(options && options.max !== undefined) {
				this.max = options.max;
			} 
			if(options && options.callback !== undefined) {
				this.callback = options.callback;
			}
		},
		start: function (options) {
			this.initialize(options);
			this.tick(this.next);
			this.isPolling = true;
		},
		stop: function() {
			if(this.timeout) {
				var timeout = this.timeout;
				$timeout.cancel(timeout);
			}
			this.isPolling = false;
		},
		tick: function(seconds) {
			var self = this;
			self.timeout = $timeout(function(){

				// only if we have more than one entry in the series, take the last two entries
				if(self.series.length > 1) {
					self.next = self.series[self.index] + self.series[self.index + 1];
				}
				self.series.push(self.next);

				if(self.callback && typeof(self.callback) == "function") {
					self.callback();
				}
				self.index ++;

				// if we passed the maximum number of items
				if(self.series.length > self.max) {
					self.restart();
				} else {
					self.tick(self.next);
				}
			}, seconds * 1000);
		},
		restart: function() {
			var self = this;
			self.stop();
			self.start();
		}
	}
}]);
