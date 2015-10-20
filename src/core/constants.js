/* global toastr:false, moment:false */
(function(angular, toastr, moment) {
    'use strict';

    angular
        .module('app.core')
        .constant('toastr', toastr)
        .constant('moment', moment);
})(angular, toastr, moment);
