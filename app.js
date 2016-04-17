var app = angular.module('bristlecone', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: './partials/home.html'
    })
    .state('view1', {
      url: '/view1',
      templateUrl: './partials/view1.html'
    })
    .state('academics', {
      url: '/academics',
      templateUrl: './partials/academics.html'
    })
    .state('view3', {
      url: '/view3',
      templateUrl: './partials/view3.html'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: './partials/contact.html'
    })
    .state('view1.inner', {
      url: '/inner',
      templateUrl: './partials/inner.html'
    })
    .state('view1.inner2', {
      url: '/inner2',
      templateUrl: './partials/inner2.html'
    })
    .state('view1.inner3', {
      url: '/inner3',
      templateUrl: './partials/inner3.html'
    })

  $urlRouterProvider.otherwise('/'); // gives a default view
});
