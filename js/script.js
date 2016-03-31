
    function TodoCtrl($scope) {
    
      var additem = $scope.addItem = function () {
          
        $scope.items.push({text:$scope.inputText});
        $scope.inputText = '';
        
      };
    var Items = $scope.items = [
        {text:$scope.additem}         
      ];
    }
    