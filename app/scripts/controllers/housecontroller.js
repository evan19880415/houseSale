'use strict';

angular.module('houseSaleApp.controllers.house',['houseSaleApp.services.houses','houseSaleApp.services.info'])
  .controller('HousesController', ['$scope', 'Houses', 'Info', 
    function ($scope, Houses, Info) {
      $scope.infos = Info;
      $scope.searchsize = {
        "limit": 10
      }

      $scope.flag = [];
      $scope.cityId = 'A'; //台北市
      $scope.typeId = 'A'; //不動產買賣
      $scope.$on('LOAD', function(){$scope.loading = true});
      $scope.$on('UNLOAD', function(){$scope.loading = false});
      
      $scope.getHouse = function(){
        $scope.$emit('LOAD');
        Houses.fetch($scope.cityId,$scope.typeId).then(function(data) {
          if($scope.typeId == 'A'){
            $scope.houses = data.lvr_land.買賣;
          }else if($scope.typeId == 'B'){
            $scope.houses = data.lvr_land.預售屋;
          }else{
            $scope.houses = data.lvr_land.租賃;
          }
          
          $scope.$emit('UNLOAD');
        });
      }

      $scope.numberOfPages=function(){
        return Math.ceil($scope.houses.length/$scope.searchsize.limit);                
      }

      $scope.filterArea = function(houses,searchLocation) {
        var result = [];
        if(searchLocation === undefined || searchLocation == ''){
          result = houses;
        }else{
          angular.forEach(houses, function(value, key) {
            if(value.鄉鎮市區 == searchLocation){
              result.push(value);
              //console.log(value);
            }
          });
        }                 
        return result;
      }

      $scope.filterList = function(house) {
        var result = [house.土地區段位置或建物區門牌,house.單價每平方公尺,house.總價元];
                       
        return result;
      }
      
  }]);