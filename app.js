var app = angular.module('bristlecone', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', { url: '/', templateUrl: './partials/home.html' })  // give it a name and a configuration object that contains a url, a template
    .state('view1', { url: '/view1', templateUrl: './partials/view1.html'})  // give it a name and a configuration object that contains a url, a template
    .state('view2', { url: '/view2', templateUrl: './partials/view2.html'})  // give it a name and a configuration object that contains a url, a template
    .state('view3', { url: '/view3', templateUrl: './partials/view3.html'})  // give it a name and a configuration object that contains a url, a template
    .state('view1.inner', { url: '/inner', templateUrl: './partials/inner.html'})  // give it a name and a configuration object that contains a url, a template
    .state('view1.inner2', { url: '/inner2', templateUrl: './partials/inner2.html'})  // give it a name and a configuration object that contains a url, a template
    .state('view1.inner3', { url: '/inner3', templateUrl: './partials/inner3.html'})  // give it a name and a configuration object that contains a url, a template

  $urlRouterProvider.otherwise('/'); // gives a default view
});
