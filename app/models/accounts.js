app.factory('accountsData', function () {
    return [
        {
            id: 1,
            idService: 1,
            name: 'Dropbox Home',
            login: 'myemail@gmail.com',
            size: {
                total: 3e+9,
                used: 1.5e+9
            }
        },
        {
            id: 2,
            idService: 1,
            name: 'Dropbox Work',
            login: 'cloudy@cloudreach.com',
            size: {
                total: 1.5e+9,
                used: 5e+8
            }
        },
        {
            id: 3,
            idService: 2,
            name: 'Google Drive',
            login: 'myemail@gmail.com',
            size: {
                total: 1.5e+10,
                used: 1e+10
            }
        },
        {
            id: 4,
            idService: 3,
            name: 'iCloud personal account',
            login: 'myemail@gmail.com',
            size: {
                total: 1.5e+10,
                used: 1e+10
            }
        }
    ];
});
