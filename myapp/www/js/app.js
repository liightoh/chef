// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])



.run(function($ionicPlatform) {
  $ionicPlatform.ready(function () {
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

  $stateProvider.state('recettequiche', {
    url:'/recettequiche',
    templateUrl:'templates/recettequiche.html',
  })

  $stateProvider.state('recettechevre', {
    url:'/recettechevre',
    templateUrl:'templates/recettechevre.html',
  })

  $stateProvider.state('recettesoupe', {
    url:'/recettesoupe',
    templateUrl:'templates/recettesoupe.html',
  })

  $stateProvider.state('platchaud', {
    url:'/platchaud',
    templateUrl:'templates/platchaud.html',
  }),
      $stateProvider.state('recettefilet', {
        url:'/recettefilet',
        templateUrl:'templates/recettefilet.html',
      })

  $stateProvider.state('recettebourguignon', {
    url:'/recettebourguignon',
    templateUrl:'templates/recettebourguignon.html',
  })

  $stateProvider.state('recettegratin', {
    url:'/recettegratin',
    templateUrl:'templates/recettegratin.html',
  })

  $stateProvider.state('platfroid', {
    url:'/platfroid',
    templateUrl:'templates/platfroid.html',
  }),

      $stateProvider.state('recettesaladepate', {
        url:'/recettesaladepate',
        templateUrl:'templates/recettesaladepate.html',
      })

  $stateProvider.state('recettesaladeriz', {
    url:'/recettesaladeriz',
    templateUrl:'templates/recettesaladeriz.html',
  })

  $stateProvider.state('recettegaspacho', {
    url:'/recettegaspacho',
    templateUrl:'templates/recettegaspacho.html',
  })

  $stateProvider.state('patisserie', {
    url:'/patisserie',
    templateUrl:'templates/patisserie.html',
  }),

  $stateProvider.state('recettecrumble', {
    url:'/recettecrumble',
    templateUrl:'templates/recette.html',
  })

  $stateProvider.state('recettemeringue', {
    url:'/recettemeringue',
    templateUrl:'templates/recettemeringue.html',
  })

  $stateProvider.state('recettegateauchoco', {
    url:'/recettegateauchoco',
    templateUrl:'templates/recettegateauchoco.html',
  })

  $stateProvider.state('settings', {
    url:'/settings',
    templateUrl:'templates/settings.html',
  })


    /*page d'acceuil */

  $urlRouterProvider.otherwise('home')


})

    .controller('LoginCtrl', function($scope, $state, $http) {

      $scope.insertdata=function(){
        $http.post(insert.php,{'log':$scope.log,'pass':$scope.pass})
            .success(function(data,status,header,config){
              console.log("data inserted  successfully")
            });
      }})


