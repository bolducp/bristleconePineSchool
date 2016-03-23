var app = angular.module('bristlecone', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', { url: '/', templateUrl: './partials/home.html' })  // give it a name and a configuration object that contains a url, a template
    .state('view1', { url: '/view1', templateUrl: './partials/view1.html', controller: 'view1Ctrl' })  // give it a name and a configuration object that contains a url, a template
    .state('view2', { url: '/view2', templateUrl: './partials/view2.html', controller: 'view2Ctrl' })  // give it a name and a configuration object that contains a url, a template
    .state('view2', { url: '/view3', templateUrl: './partials/view3.html', controller: 'view3Ctrl' })  // give it a name and a configuration object that contains a url, a template

  $urlRouterProvider.otherwise('/'); // gives a default view
});
