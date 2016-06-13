// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'auth0', 'angular-storage', 'angular-jwt'])

    .controller('LoginCtrl', function(store, $scope, $location, auth) {
      $scope.login = function() {
        auth.signin({
          authParams: {
            scope: 'openid offline_access',
            device: 'Mobile device'
          }
        }, function(profile, token, accessToken, state, refreshToken) {
          // Success callback
          store.set('profile', profile);
          store.set('token', token);
          store.set('refreshToken', refreshToken);
          $location.path('/home');
        }, function() {
          // Error callback
        });
      }
    })



.run(function($ionicPlatform, $rootScope, auth, store, jwtHelper, $location) {
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
  auth.hookEvents();

  var refreshingToken = null;
  $rootScope.$on('$locationChangeStart', function() {
    var token = store.get('token');
    var refreshToken = store.get('refreshToken');
    if (token) {
      if (!jwtHelper.isTokenExpired(token)) {
        if (!auth.isAuthenticated) {
          auth.authenticate(store.get('profile'), token);
        }
      }else {
        if (refreshToken) {
          if (refreshingToken === null) {
            refreshingToken = auth.refreshIdToken(refreshToken).then(function(idToken) {
              store.set('token', idToken);
              auth.authenticate(store.get('profile'), idToken);
            }).finally(function() {
              refreshingToken = null;
            });
          }
          return refreshingToken;
        } else {
          $location.path('login');// Notice: this url must be the one defined
        }
      }}})
})


.config(function($stateProvider, $urlRouterProvider, authProvider, $httpProvider, jwtInterceptorProvider) {

  jwtInterceptorProvider.tokenGetter = function(store, jwtHelper, auth) {
    var idToken = store.get('token');
    var refreshToken = store.get('refreshToken');
    // If no token return null
    if (!idToken || !refreshToken) {
      return null;
    }
    if (jwtHelper.isTokenExpired(idToken)) {
      return auth.refreshIdToken(refreshToken).then(function(idToken) {
        store.set('token', idToken);
        return idToken;
      });
    } else {
      return idToken;
    }
  }

  $httpProvider.interceptors.push('jwtInterceptor');

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
  }),

  $stateProvider.state('platfroid', {
    url:'/platfroid',
    templateUrl:'templates/platfroid.html',
  }),

  $stateProvider.state('patisserie', {
    url:'/patisserie',
    templateUrl:'templates/patisserie.html',
  }),

  $stateProvider.state('recette', {
    url:'/recette',
    templateUrl:'templates/recette.html',
  })
      .state('login', { // Notice: this state name matches the loginState property value to set in authProvider.init({...}) below...
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl',
      })

      .state('userInfo', {
        url: '/userInfo',
        templateUrl: 'templates/user-info.html',
        controller: 'UserInfoCtrl',
        data: {
          // This tells Auth0 that this state requires the user to be logged in.
          // If the user isn't logged in and he tries to access this state
          // he'll be redirected to the login page
          requiresLogin: true
        }
      })

  authProvider.init({
    domain: 'haissam.eu.auth0.com',
    clientID: 'MG3gKHQxZG5nbzvzlXryXiIfK6W3hnHI',
    loginState: 'login' // This is the name of the state where you'll show the login, which is defined above...
  })

  $stateProvider.state('settings', {
    url:'/settings',
    templateUrl:'templates/settings.html',
  })





    /*page d'acceuil */

  $urlRouterProvider.otherwise('/login')


})
    .run(function(auth) {
      // This hooks all auth events to check everything as soon as the app starts
      auth.hookEvents();
    })


.controller('UserInfoCtrl', function($scope, auth, store) {
  $scope.auth = auth;
  $scope.logout = function() {
    auth.signout();
    store.remove('profile');
    store.remove('token');
  }
});

