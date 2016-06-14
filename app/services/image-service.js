app.factory('ImageService', function (servicesData, accountsData) {
    return {
        addIconsToAccounts: function (accounts) {
            accounts.forEach(function (account) {
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
        },
        addIconsToFiles: function (files) {
            files.forEach(function (file) {
                file.accounts.forEach(function (account) {
                    for (var i = 0; i < accountsData.length; ++i) {
                        var accountData = accountsData[i];
                        if (account.id === accountData.id) {
                            account.idService = accountData.idService;
                            break
                        }
                    }
                });
                this.addIconsToAccounts(file.accounts);
            }, this);
        }
    };
});
