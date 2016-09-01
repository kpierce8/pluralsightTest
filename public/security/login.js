angular.module('app)').component('login',{
    templateUrl:'/security/login.html',
    controller: function(auth, $location){
        this.anonLogin = function() {
            auth.$authAnonymous().then(function() {
                $location.path('/home');
            }).catch((function(err) {
                this.errorMessage = err.code;
            }).bind(this))
        }
    }
})