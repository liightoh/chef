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

  $stateProvider.state('recettecake', {
    url:'/recettecake',
    templateUrl:'templates/recettecake.html',
  })

  $stateProvider.state('recettebruschetta', {
    url:'/recettebruschetta',
    templateUrl:'templates/recettebruschetta.html',
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

  $stateProvider.state('recettecurry', {
    url:'/recettecurry',
    templateUrl:'templates/recettecurry.html',
  })

  $stateProvider.state('recettecourgette', {
    url:'/recettecourgette',
    templateUrl:'templates/recettecourgette.html',
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

  $stateProvider.state('recettetagsaumon', {
    url:'/recettetagsaumon',
    templateUrl:'templates/recettetagsaumon.html',
  })

  $stateProvider.state('recetteveloute', {
    url:'/recetteveloute',
    templateUrl:'templates/recetteveloute.html',
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

  $stateProvider.state('recettefondant', {
    url:'/recettefondant',
    templateUrl:'templates/recettefondant.html',
  }),

      $stateProvider.state('recettegateauyahourt', {
        url:'/recettegateauyahourt',
        templateUrl:'templates/recettegateauyahourt.html',
      }),
      $stateProvider.state('recettetartefraise', {
        url:'/recettetartefraise',
        templateUrl:'templates/recettetartefraise.html',
      }),

      $stateProvider.state('tartecitron', {
        url:'/tartecitron',
        templateUrl:'templates/tartecitron.html',
      }),

    /*page d'acceuil */

  $urlRouterProvider.otherwise('home')

})

.controller('PatisserieCtrl', function($scope){
    $scope.addRecette = function (title, content) {

      $http.post("http://baptistebriois.fr/projets/learneat/ajax/addRecette.php?name=" + name + "&ingredients=" + ingredients + "&description=" + description + "&img=" + imgnom + "&price=" + price + "&time=" + time + "&type=" + type + "&difficulty=" + difficulty + "&fbuser=" + fbuser + "&fbid=" + fbid + "&fbpicture=" + fbpicture).success(function (data) {
        alert("La recette a bien été envoyée");
      });
      console.log(fbuser);
    }

})

