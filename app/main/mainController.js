(function(){
   angular.module('HomeSnippets')
       .controller('MainController', ['$scope','$http', '$interval', function($scope, $http, $interval){

           if(localStorage['User-Data'] !== undefined){
               $scope.user = JSON.parse(localStorage['User-Data']);
               console.log($scope.user);
           }
           $scope.sendSnippet = function($event){
               if(event.which === 13){
                   var request = {}
               }
           }

       }]);
})();