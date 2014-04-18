define(['js/app', 'NProgress'], function (app, NProgress) {
    'use strict';

    app.register.controller('videoCtrl', ['$scope', '$routeParams', '$http', '$sce', function ($scope, $routeParams, $http, $sce) {
        NProgress.configure({
            ease: 'linear',
            speed: 100,
            trickleRate: 0.1,
            trickleSpeed: 100
        });

        $scope.getVideo = (function(){
            NProgress.start();

            $http.get('https://everyplay.com/api/videos/'+ $routeParams.id +'?client_id=336d586b6e1b5e4a0f9eaa48e7e697d8cd51db40')
                .success(function(response){
                    $scope.video = response;

                    $scope.trustedUrl = $sce.trustAsResourceUrl($scope.video.video_url);

                    NProgress.done();
                }).error(function () {
                    NProgress.done();
                });
        })();

    }]);
});
