angular.module('app').constant('FirebaseUrl', 'https://pluralsighttest.firebaseio.com')
    .service('rootRef', ['FirebaseUrl', Firebase]);