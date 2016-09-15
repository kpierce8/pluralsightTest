var app = angular.module('app',['ngRoute', 'firebase']);

app.run(function($rootScope, $location) {
    $rootScope.$on("$routeChangeError", function(e, next, prev, err) {
        if(err === "AUTH_REQUIRED") {
            $location.path('/login');
        }
    });
});

app.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            template: '<home></home>',
            resolve: {
                myAuth: function(auth) {
                    return auth.$requireAuth();
                }
            }
        })
        .when('/userpref', {
            template: '<edit-user-pref user-preferences="$resolve.userPreferences" ></edit-user-pref>',
            resolve: {
             //   myAuth: function(auth) {
             //       return auth.$requireAuth();
             //   },
                userPreferences: function(fbRef, $firebaseObject, auth) {
                    return auth.$requireAuth().then( function(){
                         return $firebaseObject(fbRef.getPreferencesRef()).$loaded();
                    }) 
                   
                }
            }
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
        .otherwise('/home');
});

// $waitForAuth is part of the angularfire authorization service  
// https://www.firebase.com/docs/web/libraries/angular/api.html#angularfire-users-and-authentication-authentication-service-constructor