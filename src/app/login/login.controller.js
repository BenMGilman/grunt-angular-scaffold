(function () {
	'use strict';

	angular
		.module('app.login')
		.controller('LoginController', LoginController);

	LoginController.$inject = ['$q', 'logger'];
	/* @ngInject */
	function LoginController($q, logger) {
		var vm = this;

		activate();

		function activate() {
			var promises = [];
			return $q.all(promises).then(function () {
				logger.info('Activated Login View');
			});
		}
	}
})();
