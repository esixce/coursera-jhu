(function() {
    'use strict';
    
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController ($scope) {

        $scope.items = "";
        $scope.totalItems = 0;
        $scope.msg = "";

        $scope.calculateTotalItems = function () {
            const myArray = $scope.items.split(",");
            var size = 0;
                for (var i = 0; i < myArray.length; i++){
                    if (myArray[i].trim() != null && myArray[i].trim() != "") {
                        size++;
                    }
                }
            $scope.totalMsg = "Total number of food entries: " + size;
            return size;
        }

        $scope.createResponse = function() {
            var totalItems = $scope.calculateTotalItems();
            $scope.setColors(totalItems)

            var msg = "";

            if (totalItems === 0) {
                msg = "Please enter data first";
            } else if (totalItems > 0 && totalItems < 4) {
                msg = "Enjoy!";
            } else {
                msg = "Too much!";
            }
            $scope.msg = msg;
        }

        $scope.inputStyle = {
            "border": ""
        }
        $scope.msgStyle={
            "color": ""
        }
        $scope.setColors = function(totalItems) {
            if (totalItems === 0) {
                $scope.msgStyle.color = "red";
                $scope.inputStyle = {
                    "border-color": "red"
                };
            } else {
                $scope.msgStyle.color = "green";
                $scope.inputStyle = {
                    "border-color": "green"
                };                
            }
        }
    };

})();