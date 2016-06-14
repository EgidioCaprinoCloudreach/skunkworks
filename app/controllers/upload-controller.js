app.controller('UploadController', function ($scope, servicesData, accountsData, ImageService) {

    $scope.accounts = angular.copy(accountsData);
    ImageService.addIconsToAccounts($scope.accounts);

    $scope.getSelectedAccounts = function () {
        return $scope.accounts.filter(function (account) {
            return account.selected;
        });
    };

});
