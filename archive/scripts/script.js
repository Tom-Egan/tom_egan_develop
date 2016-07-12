// method chaining example
var myApp = angular
	// create module
	.module("myModule", [])
	// create controller
	.controller("myController", function($scope) {
		// attaching message property to $scope object
		// message will be our model
		$scope.message = "Hello Angular!";


// employee example
// ----------------------------------------------------------
		// complex object
		var employee = {
			firstName: "David",
			lastName: "Hastings",
			gender: "Male"
		};

		// attach this complex object to the $scope object
		$scope.employee = employee;

// country example
// ----------------------------------------------------------
		// get image path dynamically
		var country = {
			name: "United States of America",
			capitol: "Washington, D.C.",
			flag: "img/resume.svg"
		};

		$scope.country = country;


// emplyees array
// ----------------------------------------------------------
		var employees = [
			{firstName: "Ben", lastName: "Hastings", gender: "Male", salary: 55000},
			{firstName: "Sara", lastName: "Paul", gender: "Female", salary: 55000},
			{firstName: "Mark", lastName: "Holland", gender: "Male", salary: 57000},
			{firstName: "Pam", lastName: "Maciontosh", gender: "Female", salary: 53000},
			{firstName: "Todd", lastName: "Barber", gender: "Male", salary: 60000},

		];

		// attach array to object
		$scope.employees = employees;

// nested repater
// ----------------------------------------------------------
		var countries = [
			{
				name: "UK",
				cities: [
					{name: "London"},
					{name: "Manchester"},
					{name: "Birmingham"}
				]
			},
			{
				name: "USA",
				cities: [
					{name: "Los Angeles"},
					{name: "Chicago"},
					{name: "Houston"}
				]
			},
			{
				name: "India",
				cities: [
					{name: "Hyderabad"},
					{name: "Chennai"},
					{name: "Mumbai"}
				]
			}

		];

		$scope.countries = countries;
	});

