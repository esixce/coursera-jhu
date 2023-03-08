(function() {
    'use strict';
    
    angular.module('LunchCheck', [])

    .controller('LunchCheckController', function($scope) {
        $scope.foodItems = "";
        $scope.totalItems = 0;
        $scope.foodMessage = "";

        $scope.countItems = function () {
            $scope.totalItems = calculateTotalItems($scope.foodItems);
            $scope.foodMessage = calculateFoodMessage($scope.totalItems);
        };

        function calculateTotalItems(string) {
            const myArray = string.split(",");
            if (myArray[0][0] == null) {
                return 0;
            }
            return myArray.length;
        }

        function calculateFoodMessage(totalItems) {
            var msg = "";

            if (totalItems === 0) {
                msg = "Please enter data first";
            } else if (totalItems > 0 && totalItems < 4) {
                msg = "Enjoy!";
            } else {
                msg = "Too much!";
            }

            return msg;
        }

    });

})();