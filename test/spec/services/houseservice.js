'use strict';

describe('Service: Houses', function () {

  // load the service's module
  beforeEach(module('houseSaleApp'));

  // instantiate service
  var houseService;
  beforeEach(inject(function (_houseService_) {
    houseService = _houseService_;
  }));

  it('should do something', function () {
    expect(!!houseService).toBe(true);
  });

});
