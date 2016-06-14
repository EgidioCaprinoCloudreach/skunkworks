app.controller('SearchController', function ($scope, servicesData, accountsData, filesData, FileService, ImageService) {

    $scope.files = angular.copy(filesData);
    ImageService.addIconsToFiles($scope.files);
    FileService.addPercentageToFiles($scope.files);

    $scope.FileService = FileService;

});
