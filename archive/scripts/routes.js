var app = angular.module("Demo", ["ngRoute"])
	.config(function($routeProvider) {
		$routeProvider
			// when the user is on /home
			// we want this view 
			.when("/home", {
				templateURL: "views/index.html",
				controller: "homeController"
			})
			.when("/about", {
				templateURL: "views/about.html",
				controller: "aboutController"
			})

	})

	// home controller
	.controller("homeController", function ($scope) {
		$scope.message = "Home Page";
	})
	// about controller
	.controller("aboutController", function ($scope) {
		
	})