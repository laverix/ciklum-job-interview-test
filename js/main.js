require.config({
    baseUrl: '/',
    paths: {
        'modules': 'js/modules',
        'uikit': 'js/vendors/uikit/dist/js/uikit.min',

        'jquery': 'js/vendors/jquery/dist/jquery.min',
        'angular': 'js/vendors/angular/angular',
        'angular-route': 'js/vendors/angular-route/angular-route',
        'angularAMD': 'js/vendors/angularAMD/angularAMD',
        'NProgress': 'js/vendors/nprogress/nprogress'
    },
    shim: {
        'uikit': {
            deps: ['jquery']
        },
        'NProgress': {
            deps: ['jquery'],
            exports: 'NProgress'
        },
        'angularAMD': ['angular'],
        'angular-route': ['angular']
    },
    config: {
        "uikit": {
            "base": "js/vendors/uikit/dist/"
        }
    },
    deps: ['js/app']
});
