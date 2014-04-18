define(['angularAMD', 'angular-route'], function (angularAMD) {
    'use strict';

    var app = angular.module("webapp", ['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProvider.when(
            '/start', angularAMD.route({
                templateUrl: 'views/start.html',
                controller: 'startCtrl',
                controllerUrl: 'controllers/start'
            })
        ).when(
            '/video/:id', angularAMD.route({
                templateUrl: 'views/video.html',
                controller:  'videoCtrl',
                controllerUrl: 'controllers/video'
            })
        ).otherwise({redirectTo: "/start"});
    });

    angularAMD.bootstrap(app);

    return app;
});
