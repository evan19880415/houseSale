'use strict';

angular.module('houseSaleApp.services.houses', [])
  .factory('Houses', ['LocalPath' , '$q', '$timeout', '$http',
    function (LocalPath, $q, $timeout, $http) {
      var houses = {
        fetch: function(city, type) {
            var deferred = $q.defer();

            $timeout(function() {
                $http.get('../../assets/'+city+'_lvr_land_'+type+'.xml').success(function(data) {
                    deferred.resolve($.xml2json(data));
                });
            }, 30);

            return deferred.promise;
        }
      }

      // Public API here
      return houses;
    }]);
