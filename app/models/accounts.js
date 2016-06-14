app.factory('accountsData', function () {
    return [
        {
            id: 1,
            idService: 1,
            name: 'Dropbox Home',
            size: {
                total: 2e+9,
                used: 1.5e+9
            }
        },
        {
            id: 2,
            idService: 1,
            name: 'Dropbox Work',
            size: {
                total: 2e+9,
                used: 1.5e+9
            }
        },
        {
            id: 3,
            idService: 2,
            name: 'Google Drive',
            size: {
                total: 1.5e+10,
                used: 1e+10
            }
        }];
});
