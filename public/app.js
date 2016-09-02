var app = angular.module('app',['ngRoute', 'firebase']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            template: '<home></home>'
        })
         .when('/login', {
            template: '<login current-auth="$resolve.myAuth"></login>',
            resolve: {
                myAuth: function(auth) {
                    return auth.$waitForAuth();
                }
            }
        })
        .when('/logout', {
            template: '<logout></logout>',
            
        })
        .otherwise('/home')
});