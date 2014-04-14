 angular.module('pollServices', ['ngResource']).
          factory('Poll', function($resource) {
            return $resource('/areaguide', {}, {
              query: { method: 'GET', params: { pollId: 'polls' }, isArray: true }
            })
          });