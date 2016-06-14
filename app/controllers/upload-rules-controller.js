app.controller('UploadRulesController', function ($scope, criteriaData, accountsData, servicesData) {
    
    $scope.criteriaList = criteriaData;
    
    function getPlainAccountList() {
        var result =[];
        for (var i = 0; i < servicesData.length; i++){
            for (var j = 0; j < accountsData.length; j++) {
                if (accountsData[j].idService === servicesData[i].id){
                    result.push('['+servicesData[i].name+'] ' + accountsData[j].name);
                }
            }
        }
                 
        return result;
    }
    
    $scope.serviceList = getPlainAccountList();

});