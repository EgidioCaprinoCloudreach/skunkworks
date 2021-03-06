app.factory('FileService', function () {
    return {
        getAccountSizeFormatted: function formatBytes(bytes, decimals) {
            if (bytes == 0) return '0 Byte';
            var k = 1000; // or 1024 for binary
            var dm = decimals + 1 || 3;
            var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
            var i = Math.floor(Math.log(bytes) / Math.log(k));
            return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
        },
        addPercentageToFiles: function (files) {
            files.forEach(function (file) {
                file.accounts.forEach(function (account) {
                    var sizeInAccount = account.byteTo - account.byteFrom;
                    account.percentage = sizeInAccount / file.size * 100;
                });
            });
        }
    };
});
