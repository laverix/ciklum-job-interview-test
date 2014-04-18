define(['js/app', 'NProgress', 'uikit!notify'], function (app, NProgress, UI) {
    'use strict';

    app.register.controller('startCtrl', ['$scope', '$http', function ($scope, $http) {
        NProgress.configure({
            ease: 'linear',
            speed: 100,
            trickleRate: 0.1,
            trickleSpeed: 100
        });

        $scope.getVideos = function () {
            NProgress.start();

            $http.get('https://everyplay.com/api/videos?limit=10&client_id=336d586b6e1b5e4a0f9eaa48e7e697d8cd51db40')
                .success(function (response) {
                    $scope.videos = response;

                    NProgress.done();
                }).error(function () {
                    NProgress.done();
                });
        };

        $scope.getGames = function () {
            NProgress.start();

            $http.get('https://everyplay.com/api/games?limit=10&client_id=336d586b6e1b5e4a0f9eaa48e7e697d8cd51db40')
                .success(function (response) {
                    $scope.games = response;

                    NProgress.done();
                }).error(function () {
                    NProgress.done();
                });
        };

        $scope.sortVideos = function (gameId) {
            NProgress.start();

            $http.get('https://everyplay.com/api/games/' + gameId + '/videos?limit=10&client_id=336d586b6e1b5e4a0f9eaa48e7e697d8cd51db40')
                .success(function (response) {
                    if (response.length) {
                        $scope.videos = response;
                    } else {
                        UI.notify('<i class="uk-icon-search"></i> No Data');
                    }

                    NProgress.done();
                }).error(function () {
                    NProgress.done();
                });
        }

        $scope.getVideos();
        $scope.getGames();
    }]);
});
