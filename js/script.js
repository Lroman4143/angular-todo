function TodoCtrl($scope) {
$scope.items = [
    {text:'To Do:'}         
  ];
  $scope.addItem = function () {
    $scope.items.push({text:$scope.placeItemText});
    $scope.placeItemText = '';
  };
  
}