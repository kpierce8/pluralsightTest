angular.module('app').component('editUserPref', {
    templateUrl: '/userPreferences/editUserPref.html',
    controller: function(fbRef, $firebaseObject, $location) {
  
        this.themes = ["light", "dark"]

       this.userPreferences =  $firebaseObject(fbRef.getPreferencesRef());

       this.save = function(){
           this.userPreferences.$save();
            $location.path('/home');
       }

       this.cancel = function() {
           $location.path('/home');
       }
    }
});