angular.module('app.services', ['firebase'])


.factory("Parties", function($firebaseArray) {
  var partiesRef = new Firebase("https://project-1147322799272806851.firebaseio.com/parties");
  return $firebaseArray(partiesRef);
})

.factory("Sports", function($firebaseArray) {
  var sportsRef = new Firebase("https://project-1147322799272806851.firebaseio.com/sports");
  return $firebaseArray(sportsRef);
})

.factory("CultureEvents", function($firebaseArray) {
  var cultureRef = new Firebase("https://project-1147322799272806851.firebaseio.com/culture");
  return $firebaseArray(cultureRef);
})


.service('DetailsParty', function() {
  function set(data){ setData = data; }
  function get(data){ return setData; }
  return {set: set, get: get}
})

.service('DetailsSport', function() {
  function set(data){ setData = data; }
  function get(data){ return setData; }
  return {set: set, get: get}
})

.service('DetailsCulture', function() {
  function set(data){ setData = data; }
  function get(data){ return setData; }
  return {set: set, get: get}
})

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}]);

