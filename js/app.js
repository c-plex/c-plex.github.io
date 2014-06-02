'use strict';

angular.
module('c-plex', []).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/front',       {templateUrl: '/partials/front.html',   controller: FrontCtrl}).
    when('/project/:id', {templateUrl: '/partials/project.html', controller: ProjectsCtrl}).
    otherwise({redirectTo: '/front'});
}]);
