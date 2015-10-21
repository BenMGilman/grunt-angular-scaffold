(function () {
    'use strict';

    var pouch = angular.module('app.pouch');
    
    //Add plugin methods to pouch databases
    pouch.config(pouchConfig);
    pouchConfig.$inject = ['pouchDBProvider', 'POUCHDB_METHODS'];
    /* @ngInject */
    function pouchConfig(pouchDBProvider, POUCHDB_METHODS) {
        var pouchPlugins = {
            //find - http://nolanlawson.github.io/pouchdb-find/
            createIndex: 'qify',
            find: 'qify'
        };
        pouchDBProvider.methods = angular.extend({}, POUCHDB_METHODS, pouchPlugins);
    }

})();
