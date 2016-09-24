var itinerary = angular.module('itinerary', []);
itinerary.controller('validateItinerary', function($scope, $http) {
	$scope.itineraries = [];
	$http.get("https://gist.githubusercontent.com/tdreyno/4278655/raw/7b0762c09b519f40397e4c3e100b097d861f5588/airports.json").then(function(response){
			$scope.itineraries = response.data;
		});

	$scope.add = function() {
		$http({
			method : "POST",
			url : '/checkequal',
			data : {
				"source" : $scope.source.iata,
				"destination" : $scope.destination.iata
			}
		}).success(function(data) {
			if(!Boolean(data.equal)){
				$scope.itineraries.push({
				"source": $scope.source,
				"destination": $scope.destination
			});
				$scope.error = "";
			}
			else
			{
				$scope.error = "Please enter different source and destination";
			}

		}).error(function(error) {

		});
	};
});
