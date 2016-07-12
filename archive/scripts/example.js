// create app variable, < reference path = "angular.min.js" />
// name of module = 'myModule'
// module does not have any dependencies, pass an empty array
var myApp = angular.module("myModule",[]);

// register controller with our module
// 1st parameter == name of the controller
// 2nd parameter == controller function
myApp.controller("myController", function($scope) {
	// attaching message property to $scope object
	$scope.message = "AngularJS Tutorial";

	// complex object
	var employee = {
		firstName: "David",
		lastName: "Hastings",
		gender: "Male"
	};

	// attach this complex object to the $scope object
	$scope.employee = employee;
});