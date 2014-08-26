'use strict';

angular.module('houseSaleApp.controllers.house',['houseSaleApp.services.houses','houseSaleApp.services.info'])
  .controller('HousesController', ['$scope', 'Houses', 'Info', 
    function ($scope, Houses, Info) {
      $scope.infos = Info;
      $scope.searchsize = {
        "limit": 10
      }

      $scope.currentPage = 1;
      $scope.currentHouses = [];
      $scope.houses = [];
      $scope.areaHouse = [];
      $scope.searchArea = '';
      $scope.searchLocation = '';
      $scope.locations = '';
      $scope.flag = [];
      $scope.flagIndex = 0;
      $scope.flagLastIndex = 0;
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

      $scope.getArea = function(cityId){
        cityId = cityId=== undefined?"A":cityId;
        for(var key in $scope.infos.cities){ 
          if($scope.infos.cities[key].Id == cityId){
            $scope.locations = $scope.infos.cities[key].locations;
          } 
        }
      }  

      $scope.checkFlagIndex = function(index){
        $scope.flagIndex = index;
      }

      $scope.changeArea = function(area){
        $scope.searchArea= area;
        $scope.currentPage = 1;
        $scope.areaHouse.length = 0;
      }

      $scope.numberOfPages=function(currentHouses){
        return Math.ceil(currentHouses.length/$scope.searchsize.limit);                
      }

      $scope.currentHouses=function(){
        return $scope.areaHouse == 0?$scope.houses.length:$scope.areaHouse.length;            
      }

      $scope.filterArea = function(houses,searchArea) {
        var result = [];
        var current = $scope.currentPage == 1?0:($scope.currentPage-1)*10;
        if(houses != null){
          if(searchArea === undefined || searchArea == '' || searchArea == null){
            for(var i=current;i<current+10;i++){
              if(houses[i]!= null){
                result.push(houses[i]);
              }        
            }
          }else{
            if($scope.areaHouse.length == 0){
              angular.forEach(houses, function(value, key) {
                if(value.土地區段位置或建物區門牌.match(searchArea)!=null){
                  $scope.areaHouse.push(value);
                }
              });
            }else{
              for(var i=current;i<current+10;i++){
                if($scope.areaHouse[i]!= null){
                  result.push($scope.areaHouse[i]);
                }        
              }
            } 
          }               
        }
                  
        return result;
      }

      $scope.filterList = function(house) {
        var unitPrice = 0;
        var totalPrice = house.總價元;
        var unitArea = house.建物移轉總面積平方公尺;

        totalPrice = totalPrice.substring(0, totalPrice.length - 4);
        unitArea = (unitArea/3.3058).toString();
        unitPrice = (totalPrice/unitArea).toString();
        unitPrice = unitPrice.substring(0, unitPrice.indexOf('.')+2);
        unitArea = unitArea.substring(0, unitArea.indexOf('.')+3);

        var result = [house.土地區段位置或建物區門牌,house.交易年月,unitPrice,totalPrice,unitArea];
                       
        return result;
      }


      $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
      };  
      
  }]);