var app = angular.module('bristlecone', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './partials/home.html'
    })
    .state('communal_living', {
      url: '/communal_living',
      templateUrl: './partials/communal_living.html'
    })
    .state('academics', {
      url: '/academics',
      templateUrl: './partials/academics.html'
    })
    .state('selfgov', {
      url: '/selfgov',
      templateUrl: './partials/selfgov.html'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: './partials/contact.html'
    })

  $urlRouterProvider.otherwise('/'); // gives a default view
});
