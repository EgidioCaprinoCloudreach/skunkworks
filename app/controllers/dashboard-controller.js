app.controller('DashboardController', function ($scope, servicesData, accountsData) {

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

    $scope.getUsage = function (account) {
        if (account) {
            return (account.size.used * 100) / account.size.total;
        } else {
            return 0;
        }
    }

    $scope.getAccountSizeFormatted = function formatBytes(bytes, decimals) {
        if (bytes == 0) return '0 Byte';
        var k = 1000; // or 1024 for binary
        var dm = decimals + 1 || 3;
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        var i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

});
