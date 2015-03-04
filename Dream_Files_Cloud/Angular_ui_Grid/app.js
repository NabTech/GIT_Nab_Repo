// JavaScript Document

    var app = angular.module('app', ['ngTouch', 'ui.grid']);
     
    app.controller('MainCtrl', ['$scope', function ($scope) {
     
    $scope.myData = [
    {
    "firstName": "Nabil",
    "lastName": "Manzoor",
    "company": "Workplains",
    "employed": true
    },
    {
    "firstName": "Raheel",
    "lastName": "Farooq",
    "company": "SNGPL",
    "employed": false
    },
    {
    "firstName": "Imran",
    "lastName": "Azhar",
    "company": "Medicine",
    "employed": false
    }
    ];
    }]);