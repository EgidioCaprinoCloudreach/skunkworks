app.controller('UploadController', function ($scope, servicesData, accountsData) {

    $scope.accounts = angular.copy(accountsData);

    $scope.accounts.forEach(function (account) {
        for (var i = 0; i < servicesData.length; ++i) {
            var service = servicesData[i];
            if (account.idService === service.id) {
                account.icon = service.icon;
                break;
            }
        }
        if (!account.icon) {
            account.icon = null;
        }
    });

    $scope.getSelectedAccounts = function () {
        return $scope.accounts.filter(function (account) {
            return account.selected;
        });
    };

});
