angular.module('app.services', ['firebase'])
.factory("Parties", function($firebaseArray) {
  var partiesRef = new Firebase("https://project-1147322799272806851.firebaseio.com/parties");
  return $firebaseArray(partiesRef);
})
.service('DetailsParty', function() {
  function set(data){ setData = data; }
  function get(data){ return setData; }
  return {set: set, get: get}

  //this.selectedParty;
})


.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}]);

