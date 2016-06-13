// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs).
    // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
    // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
    // useful especially with forms, though we would prefer giving the user a little more room
    // to interact with the app.
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }
  });
})


.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
    url:'/home',
    templateUrl:'templates/home.html',
  })

  $stateProvider.state('entree', {
    url:'/entree',
    templateUrl:'templates/entree.html',
  })

  $stateProvider.state('platchaud', {
    url:'/platchaud',
    templateUrl:'templates/platchaud.html',
  })

  $stateProvider.state('platfroid', {
    url:'/platfroid',
    templateUrl:'templates/platfroid.html',
  })

  $stateProvider.state('patisserie', {
    url:'/patisserie',
    templateUrl:'templates/patisserie.html',
  })

  $stateProvider.state('recette', {
    url:'/recette',
    templateUrl:'templates/recette.html',
  })

  $stateProvider.state('login', {
    url:'/login',
    templateUrl:'templates/login.html',
    controller:'LoginCtrl',
  })

  $stateProvider.state('settings', {
    url:'/settings',
    templateUrl:'templates/settings.html',
  })



    /*page d'acceuil */

  $urlRouterProvider.otherwise('/home')


})


    .controller('LoginCtrl', function($scope, $state, $http) {

        $scope.insertdata=function(){
          $http.post(insert.php,{'log':$scope.log,'pass':$scope.pass})
              .success(function(data,status,header,config){
                console.log("data inserted  successfully")
              });
        }

    });