(function(angular) {
    'use strict';

    /*
     * here is the right place to configure shared modules like app.appCore and feature-module
     * app.appCore defines the dependencies to angular and third party modules
     * any feature module should depend on app.appCore and possible other shared modules
     */

    /**
     * @ngdoc: overview
     * @name: scaffoldTest
     *
     */
    angular.module('scaffoldTest', ['app.core']);
    angular.module('scaffoldTest').run(scaffoldTestRun);

    /* @ngInject */
    function scaffoldTestRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [

            /* Add New States Above */
        ];
    }

})(angular);
