/**
 * Created by Shtav on 4/13/15.
 */
angular.module('sheepApp')
  .controller('GalleryCtrl', function ($scope, userService) {
    $scope.users = null;
   userService.success(function(data){
     console.log(data);
     $scope.users = data;
    });
  });