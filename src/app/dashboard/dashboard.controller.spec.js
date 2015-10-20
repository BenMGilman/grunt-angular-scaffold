/* jshint -W117, -W030 */
describe('', function () {
  var controller;

  beforeEach(function () {
    bard.appModule('app.dashboard');
    bard.inject('$controller', '$log', '$rootScope');
  });

  beforeEach(function () {
    controller = $controller('DashboardController', {
      $scope: $rootScope.$new()
    });
    $rootScope.$apply();
        console.log(controller);
  });

  bard.verifyNoOutstandingHttpRequests();

  describe('Dashboard Controller', function () {
    it('should be created successfully', function () {
      expect(controller).toBeDefined();
    });

    describe('after activate', function () {
      it('should have logged "Activated"', function () {
        expect($log.info.logs).toMatch(/Activated/);
      });
    });
  });
});
