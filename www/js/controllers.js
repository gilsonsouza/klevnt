angular.module('app.controllers', [])

.controller('sportsCtrl', function($scope) {

})

.controller('partiesCtrl', function($scope, $state, Parties, DetailsParty) {
  $scope.parties = Parties;
  $scope.getDatetime = new Date();
  console.log($scope.getDatetime);
  $scope.setDetails = function(party)
  {
    DetailsParty.set(party);
    $state.go('tabsController.page5');
    //and your redirection stuff goes here.
  };
})

.controller('cultureCtrl', function($scope) {

})

.controller('page5Ctrl', function($scope, DetailsParty) {
  $scope.party = DetailsParty.get();
  //console.log($scope.party);
})

.controller('page9Ctrl', function($scope) {

})

.controller('page10Ctrl', function($scope) {

})

.controller('allEventsCtrl', function($scope, Parties) {


})
.controller('allPartiesCtrl', function($scope, $state, Parties, DetailsParty) {
  $scope.parties = Parties;
  date = new Date();
  $scope.setDetails = function(party)
  {
    DetailsParty.set(party);
    $state.go('tabsController.page5');
  };
  $scope.filterDate = function(){
    return function(item){
      return ((item["year"] == date.getFullYear() && item["month"] > date.getMonth()
        && item["day"] >= date.getDate()) || item["year"] > date.getFullYear());
    }
}

})
