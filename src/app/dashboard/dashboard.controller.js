(function () {
	'use strict';

	angular
		.module('app.dashboard')
		.controller('DashboardController', DashboardController);

	DashboardController.$inject = ['$q', 'logger'];
	/* @ngInject */
	function DashboardController($q, logger) {
		var vm = this;

		activate();

		function activate() {
			var promises = [];
			return $q.all(promises).then(function () {
				logger.info('Activated Dashboard View');
			});
		}
	}
})();
