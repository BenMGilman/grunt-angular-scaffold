(function () {
    'use strict';

    angular
        .module('app.shell')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'shell',
                config: {
                    abstract: true,
                    templateUrl: 'app/shell/shell.html',
                    controller: 'ShellController',
                    controllerAs: 'vm'
                }
            }
        ];
    }
})();
