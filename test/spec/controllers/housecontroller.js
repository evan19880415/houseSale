'use strict';

describe('Controller: HousesController', function () {

  // load the controller's module
  beforeEach(module('houseSaleApp'));

  var HousesController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HousesController = $controller('HousesController', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
