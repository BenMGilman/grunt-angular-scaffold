(function () {
	'use strict';

	angular
		.module('app.shell')
		.controller('ShellController', ShellController);

	ShellController.$inject = ['$q', 'logger', 'lodash', 'routerHelper'];
	/* @ngInject */
	function ShellController($q, logger, _, routerHelper) {
		var vm = this;
		vm.navStates = getTabs();

		activate();

		function activate() {
			var promises = [];
			return $q.all(promises).then(function () {
				logger.info('Activated Shell Controller');
			});
		}
		
		function getTabs() {
			var secondRouteOnlyRegex = new RegExp('shell' + '\.[a-z]+$', 'i');
			return _.filter(routerHelper.getStates(), function(s) {
				return secondRouteOnlyRegex.test(s.name) && !s.abstract;
			});
		}
	}
})();
