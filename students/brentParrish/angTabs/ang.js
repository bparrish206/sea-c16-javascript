
function NgTabsCtrl($scope, $http) {

  $scope.tabs = [];

  $http({method: 'GET', url: 'http://rs.hankyates.com:3000/content'})  
  .success(onTabsFetched);

  $scope.showTab = function(tab){
    $scope.activeTab = tab;
  };

  function onTabsFetched(tabs){
    $scope.tabs = tabs;
    $scope.activeTab = $scope.tabs[0];
  }

}


function newTabs($scope){
  $scope.kitten = "http://placekitten.com/g";
  
  $scope.kennel = ["Small", "Medium","Husky","Large"];
  
  $scope.counter = 0;
  $scope.catsRule = false;
  

}

