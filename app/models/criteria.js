app.factory('criteriaData', function () {
    return [
        {
            label: 'File size',
            type: 'number'
,            comparators: [
                'equal',
                'greater than',
                'less than',
                'equal or greater than',
                'equal or less than'
            ]
        },
        {
            label: 'File name',
            type: 'text',
            comparators: [
                'equal',
                'contain',
                'not containing'
            ]
        },
        {
            label: 'File extension',
            type: 'text',
            comparators: [
                'equal',
                'contain',
                'not containing'                
            ]
        }
    ];
});
