app.controller('DashboardController', function ($scope, servicesData, accountsData, FileService) {

    $scope.serviceList = servicesData;

    $scope.getAccountByService = function (serviceId) {
        var result = [];
        for (var i = 0; i < accountsData.length; i++) {
            if (accountsData[i].idService === serviceId) {
                result.push(accountsData[i]);
            }
        }
        return result;
    };

    $scope.getUsage = function (account) {
        if (account) {
            return (account.size.used * 100) / account.size.total;
        } else {
            return 0;
        }
    };

    $scope.getAccountSizeFormatted = FileService.getAccountSizeFormatted;

});
