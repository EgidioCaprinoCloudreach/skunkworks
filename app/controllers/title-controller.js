app.controller('TitleController', function ($scope, $location) {

    $scope.$on('$locationChangeStart', function () {
        if ($location.path() === '/dashboard') {
            $scope.title = 'Dashboard';
        }
        if ($location.path() === '/upload') {
            $scope.title = 'Upload';
        }
        if ($location.path() === '/search') {
            $scope.title = 'Search';
        }
        if ($location.path() === '/accounts') {
            $scope.title = 'Accounts';
        }
        if ($location.path() === '/rules') {
            $scope.title = 'Rules';
        }
        if ($location.path() === '/settings') {
            $scope.title = 'Settings';
        }
    });

});
