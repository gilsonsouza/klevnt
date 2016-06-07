angular.module('app.controllers', [])

.controller('sportsCtrl', function($scope,$state, Sports, DetailsSport) {
  $scope.sports = Sports;
  $scope.getDatetime = new Date();
  $scope.filterToday  = function(){
    return function(party)
    {
    return (party.day == $scope.getDatetime.getDate() && party.month == $scope.getDatetime.getMonth()+1 && party.year == $scope.getDatetime.getFullYear())
    }
  };
  $scope.setDetails = function(sport)
  {
    DetailsSport.set(sport);
    $state.go('tabsController.page9');
  };
})

.controller('partiesCtrl', function($scope, $state, Parties, DetailsParty) {
  $scope.parties = Parties;
  $scope.getDatetime = new Date();
  console.log($scope.getDatetime);
  $scope.filterToday  = function(){
    return function(party)
    {
    return (party.day == $scope.getDatetime.getDate() && party.month == $scope.getDatetime.getMonth()+1 && party.year == $scope.getDatetime.getFullYear())
    }
  };
  $scope.setDetails = function(party)
  {
    DetailsParty.set(party);
    $state.go('tabsController.page5');
  };
})

.controller('cultureCtrl', function($scope,$state, CultureEvents, DetailsCulture) {
  $scope.cultureEvents = CultureEvents;
  $scope.getDatetime = new Date();
  $scope.filterToday  = function(){
    return function(cultureEvent)
    {
    return (cultureEvent.day == $scope.getDatetime.getDate() && cultureEvent.month == $scope.getDatetime.getMonth()+1 && cultureEvent.year == $scope.getDatetime.getFullYear())
    }
  };
  $scope.setDetails = function(culture)
  {
    DetailsCulture.set(culture);
    $state.go('tabsController.page10');
  };
})

.controller('page5Ctrl', function($scope, DetailsParty) {
  $scope.party = DetailsParty.get();
})

.controller('page9Ctrl', function($scope, DetailsSport) {
  $scope.sport = DetailsSport.get();
})

.controller('page10Ctrl', function($scope, DetailsCulture) {
  $scope.cultureEvent = DetailsCulture.get();
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
        && item["day"] >= date.getDate()) || (item["year"] == date.getFullYear() && item["month"] > date.getMonth()+1)
        || item["year"] > date.getFullYear());
    }
  }
})

.controller('allSportsCtrl', function($scope, $state, Sports, DetailsSport) {
  $scope.sports = Sports;
  date = new Date();
  $scope.setDetails = function(sport)
  {
    DetailsSport.set(sport);
    $state.go('tabsController.page9');
  };
  $scope.filterDate = function(){
    return function(item){
      return ((item["year"] == date.getFullYear() && item["month"] > date.getMonth()
        && item["day"] >= date.getDate()) || (item["year"] == date.getFullYear() && item["month"] > date.getMonth()+1)
        || item["year"] > date.getFullYear());
    }
  }
})

.controller('allCultureCtrl', function($scope, $state, CultureEvents, DetailsCulture) {
  $scope.cultureEvents = CultureEvents;
  date = new Date();
  $scope.setDetails = function(cultureEvent)
  {
    DetailsCulture.set(cultureEvent);
    $state.go('tabsController.page10');
  };
  $scope.filterDate = function(){
    return function(item){
      return ((item["year"] == date.getFullYear() && item["month"] > date.getMonth()
        && item["day"] >= date.getDate()) || (item["year"] == date.getFullYear() && item["month"] > date.getMonth()+1)
         || item["year"] > date.getFullYear());
    }
  }

})
