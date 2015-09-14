var App = angular.module('myApp', [ 'ngRoute','ngAnimate','ui.bootstrap']);

/** Define Constant **/
App.constant('config', {
	appName : 'Angular js Experiment',
	apiPath : 'api/api.php',
	header : "'Content-Type': 'application/x-www-form-urlencoded'",
})

/** Routing of application **/
App.config([ '$routeProvider', '$controllerProvider',
		function($routeProvider, $controllerProvider) {

			$routeProvider.when('/home', {
				templateUrl : 'view/home.html',
				controller : 'home'
			}).when('/client-management-system', {
				templateUrl : 'view/client-management/index.html',
				controller : 'ClientManagement'
			})
			
			.otherwise({
				redirectTo : '/home'
			});
		} ])