angular.module('app').component('nav', {
    templateUrl: '/nav/nav.html',
    controller: function($firebaseObject, fbRef) {
        this.loaded = false;
        this.userPreferences = $firebaseObject(fbRef.getPreferencesRef());
        this.userPreferences.$loaded().then((function(data){
            this.loaded = true;
         //   this.darktheme = this.userPreferences.theme === 'dark';
        }).bind(this))
     
    }
})
