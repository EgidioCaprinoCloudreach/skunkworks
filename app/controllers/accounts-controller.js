app.controller('AccountsController', function ($scope, $mdDialog, $mdMedia, servicesData, accountsData) {

    $scope.serviceList = servicesData;

    $scope.getAccountByService = function (serviceId) {
        var result = [];
        for (var i = 0; i < accountsData.length; i++) {
            if (accountsData[i].idService === serviceId) {
                result.push(accountsData[i]);
            }
        }
        return result;
    }

});
