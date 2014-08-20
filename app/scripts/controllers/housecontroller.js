'use strict';

angular.module('houseSaleApp.controllers.house',['houseSaleApp.services.houses','houseSaleApp.services.info'])
  .controller('HousesController', ['$scope', 'Houses', 'Info', 
  	function ($scope, Houses, Info) {
  		$scope.infos = Info;
  		$scope.cityId = 'A'; //台北市
  		$scope.typeId = 'A'; //不動產買賣
  		$scope.$on('LOAD', function(){$scope.loading = true});
  		$scope.$on('UNLOAD', function(){$scope.loading = false});
  		
  		$scope.getHouse = function(){
  			$scope.$emit('LOAD');
  			Houses.fetch($scope.cityId,$scope.typeId).then(function(data) {
			    $scope.houses = data;
			    $scope.$emit('UNLOAD');
			});
  		}
	    
	}]);
