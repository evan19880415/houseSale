'use strict';

// Declare app level module which depends on filters, and services
angular.module('houseSaleApp.config', [])

app.config(['$routeProvider', 
	function($routeProvider) {
		$routeProvider
		.when('/',                        		{ templateUrl: 'views/default.html' })
		.when('/houses',                        { templateUrl: 'views/houses/list.html' })
		.otherwise({ redirectTo: '/' })
	}])

.constant('LocalPath', 'https://dl.dropboxusercontent.com/u/46003996/houses/')