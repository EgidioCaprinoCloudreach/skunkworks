app.factory('filesData', function () {
    return [
        {
            id: 1,
            name: 'robert_martin_clean_code.pdf',
            tag: ['programming'],
            size: 5.3e+6,
            accounts: [
                {
                    id: 1,
                    byteFrom: 0,
                    byteTo: 5.3e+6
                }
            ]
        },
        {
            id: 2,
            name: 'v_for_vendetta_br_rip.mp4',
            tag: ['movies', 'movies_action'],
            size: '1e+10',
            accounts: [
                {
                    id: 2,
                    byteFrom: 0,
                    byteTo: 5e+9
                },
                {
                    id: 3,
                    byteFrom: 5e+9 + 1,
                    byteTo: 1e+10 + 1
                }
            ]
        }
    ];
});
