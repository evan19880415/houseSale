'use strict';

angular.module('houseSaleApp.services.info', [])
  .factory('Info', function () {
      var info = {};
      info.cities = [
        {"Id": "C", "name":"基隆市"},
        {"Id": "A", "name":"臺北市"},
        {"Id": "F", "name":"新北市"},
        {"Id": "H", "name":"桃園縣"},
        {"Id": "O", "name":"新竹市"},
        {"Id": "J", "name":"新竹縣"},
        {"Id": "K", "name":"苗栗縣"},
        {"Id": "B", "name":"臺中市"},
        {"Id": "M", "name":"南投縣"},
        {"Id": "N", "name":"彰化縣"},
        {"Id": "P", "name":"雲林縣"},
        {"Id": "I", "name":"嘉義市"},
        {"Id": "Q", "name":"嘉義縣"},
        {"Id": "D", "name":"臺南市"},
        {"Id": "E", "name":"高雄市"},
        {"Id": "T", "name":"屏東縣"},
        {"Id": "G", "name":"宜蘭縣"},
        {"Id": "U", "name":"花蓮縣"},
        {"Id": "V", "name":"臺東縣"},
        {"Id": "X", "name":"澎湖縣"},
        {"Id": "W", "name":"金門縣"},
        {"Id": "Z", "name":"連江縣"}
      ];

      info.types = [
        {"Id": "A", "name":"不動產買賣"},
        {"Id": "B", "name":"預售屋買賣"},
        {"Id": "C", "name":"不動產租賃"}
      ];
      // Public API here
      return info;
    });
