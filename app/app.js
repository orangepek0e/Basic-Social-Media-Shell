(function(){
   angular.module('HomeSnippets', ['ui.router', 'ngFileUpload'])

       .config(function($stateProvider){

           $stateProvider
               .state('signUp', {
                   url:"/signup",
                   templateUrl:"app/signup/signup.html",
                   controller: "SignUpController"

               })
               .state('editProfile', {
                   url:"/edit-profile",
                   templateUrl: "app/profile/editProfileView.html",
                   controller: "EditProfileController"
               })

       })

}());