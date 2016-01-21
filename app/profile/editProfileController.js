(function(){
    angular.module('HomeSnippets')
        .controller('EditProfileController',['Upload','$scope', '$state', '$http', function(Upload, $scope, $state, $http){

            $scope.user = JSON.parse(localStorage['User-Data']) || undefined;

            $scope.$watch(function(){
                return $scope.file
            }, function(){
                $scope.upload($scope.file);
            });


            $scope.upload = function(file){
                if(file){
                    Upload.upload({
                        url:'api/profile/editPhoto',
                        method: 'POST',
                        data: {userId: $scope.user._id},
                        file: file
                    }).progress(function(evt){
                        console.log("working");
                    }).success(function(data){

                    }).error(function(error){
                        console.log(error);
                    })
                }
            };

            $scope.updateUsername = function() {
                var request = {
                    userId: $scope.user._id,
                    username: $scope.user.username
                }

                $http.post('api/profile/updateUsername', request).success(function(){
                    console.log("user success");
                }).error(function(error){
                    console.log(error);
                })
            };

            //We could have used a switch statement, but I wanted to get comfortable typing this code format.//

            $scope.updateBio = function() {
                var request = {
                    userId: $scope.user._id,
                    userBio: $scope.user.bio
                }

                $http.post('api/profile/updateBio', request).success(function(){
                    console.log("bio success");
                }).error(function(err){
                    console.log(err);
                })
            };

        }]);
}());