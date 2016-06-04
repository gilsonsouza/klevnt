angular.module('app.controllers', [])

.controller('sportsCtrl', function($scope,$state, Sports, DetailsSport) {
  $scope.sports = Sports;
  $scope.getDatetime = new Date();
  console.log($scope.getDatetime);
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
  $scope.setDetails = function(party)
  {
    DetailsParty.set(party);
    $state.go('tabsController.page5');
  };
})

.controller('cultureCtrl', function($scope,$state, CultureEvents, DetailsCulture) {
  $scope.cultureEvents = CultureEvents;
  $scope.today = new Date();

  $scope.setDetails = function(culture)
  {
    DetailsCulture.set(culture);
    $state.go('tabsController.page10');
  };
  
  $scope.filterDate = function(){
    return function(item){
      date = new Date();
      date.setFullYear(item["year"],item["month"]-1,item["day"]);
      date.setHours(0,0,0,0,0);
      $scope.today.setHours(0,0,0,0,0);
      return (date.getTime() == $scope.today.getTime());
    }
  }
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

  today = new Date();
  today.setHours(0,0,0,0,0);
  var i = 0;

  for( var x in $scope.parties) {
    date = new Date();
    date.setFullYear($scope.parties[x].year,$scope.parties[x].month-1,$scope.parties[x].day);
    date.setHours(0,0,0,0,0);
    if(date < today)
      i++;
  }

  var total = $scope.parties.length - i;

  $scope.filteredItems = total; //Initially for no filter  
  $scope.totalItems = total;

  $scope.setDetails = function(party)
  {
    DetailsParty.set(party);
    $state.go('tabsController.page5');
  };
  $scope.filterDate = function(){
    return function(item){
      date = new Date();
      date.setFullYear(item["year"],item["month"]-1,item["day"]);
      date.setHours(0,0,0,0,0);
      return (date >= today);
    }
  }

  $scope.filter = function() {
    $timeout(function() { 
      $scope.filteredItems = $scope.filtered.length;
    }, 10);
  };
})

.controller('allSportsCtrl', function($scope, $state, Sports, DetailsSport) {
  $scope.sports = Sports;
  today = new Date();
  today.setHours(0,0,0,0,0);
  var i = 0;

  for( var x in $scope.sports) {
    date = new Date();
    date.setFullYear($scope.sports[x].year,$scope.sports[x].month-1,$scope.sports[x].day);
    date.setHours(0,0,0,0,0);
    if(date < today)
      i++;
  }

  var total = $scope.sports.length - i;

  $scope.filteredItems = total; //Initially for no filter  
  $scope.totalItems = total;

  $scope.setDetails = function(sport)
  {
    DetailsSport.set(sport);
    $state.go('tabsController.page9');
  };
  $scope.filterDate = function(){
    return function(item){
      date = new Date();
      date.setFullYear(item["year"],item["month"]-1,item["day"]);
      date.setHours(0,0,0,0,0);
      return (date >= today);
    }
  }

  $scope.filter = function() {
    $timeout(function() { 
      $scope.filteredItems = $scope.filtered.length;
    }, 10);
  };
})

.controller('allCultureCtrl', function($scope, $state, CultureEvents, DetailsCulture) {
  $scope.cultureEvents = CultureEvents;
  today = new Date();
  today.setHours(0,0,0,0,0);
  var i = 0;

  for( var x in $scope.cultureEvents) {
    date = new Date();
    date.setFullYear($scope.cultureEvents[x].year,$scope.cultureEvents[x].month-1,$scope.cultureEvents[x].day);
    date.setHours(0,0,0,0,0);
    if(date < today)
      i++;
  }

  var total = $scope.cultureEvents.length - i;

  $scope.filteredItems = total; //Initially for no filter  
  $scope.totalItems = total;

  $scope.setDetails = function(cultureEvent)
  {
    DetailsCulture.set(cultureEvent);
    $state.go('tabsController.page10');
  };
  $scope.filterDate = function(){
    return function(item){
      date = new Date();
      date.setFullYear(item["year"],item["month"]-1,item["day"]);
      date.setHours(0,0,0,0,0);
      return (date >= today);
    }
  }

  $scope.filter = function() {
    $timeout(function() { 
      $scope.filteredItems = $scope.filtered.length;
    }, 10);
  };
})
