var app = angular
  .module('MyApp', [
    'ui.router'
  ])
.config(['$stateProvider', '$urlRouterProvider',
function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/main');

    $stateProvider
        // States
     .state("main", {
          controller:'mainController',
          url:"/main",
          templateUrl: "partial/page3.html"
      })  
      .state("main.1", {
          controller:'postCtrl',
          parent: 'main',
          url:"/posts",
          templateUrl: 'partial/post.html'
      })  
      .state("main.2", {
          controller:'commentsCtrl',
          parent: 'main',
          url: "/comments",
          templateUrl: 'partial/comment.html'
      })
      .state("main.3", {
          controller:'photoCtrl',
          parent: 'main',
          url: "/photos",
          templateUrl: 'partial/photo.html'
      })  
}])
;
app.controller('mainController', function ($scope) {
  $scope.Model = $scope.Model || {Name : "xxx"};
});
app.controller('postCtrl', function($scope, $http) {
    $http.get("https://jsonplaceholder.typicode.com/posts").then(function(response) {
        $scope.mydata = response.data;
    });
});
app.controller('commentsCtrl',function($scope, $http){
    $http.get("https://jsonplaceholder.typicode.com/comments").then(function(response){
        $scope.mydata = response.data;
    });
});
app.controller('photoCtrl',function($scope, $http){
    $http.get("https://jsonplaceholder.typicode.com/photos").then(function(response){
        $scope.mydata = response.data;
    })
})
// app.run(
//     ['$rootScope', '$state', '$stateParams',
//       function ($rootScope, $state, $stateParams) {
//           $rootScope.$state = $state;
//           $rootScope.$stateParams = $stateParams;
//       }
//     ])