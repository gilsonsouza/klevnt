angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



      .state('tabsController.sports', {
    url: '/sports',
    views: {
      'tab4': {
        templateUrl: 'templates/sports.html',
        controller: 'sportsCtrl'
      }
    }
  })

  .state('tabsController.parties', {
    url: '/parties',
    views: {
      'tab3': {
        templateUrl: 'templates/parties.html',
        controller: 'partiesCtrl'
      }
    }
  })

  .state('tabsController.culture', {
    url: '/culture',
    views: {
      'tab5': {
        templateUrl: 'templates/culture.html',
        controller: 'cultureCtrl'
      }
    }
  })

  .state('tabsController.page5', {
    url: '/partydetails',
    views: {
      'tab3': {
        templateUrl: 'templates/page5.html',
        controller: 'page5Ctrl'
      }
    }
  })

  .state('tabsController.page9', {
    url: '/sportdetails',
    views: {
      'tab4': {
        templateUrl: 'templates/page9.html',
        controller: 'page9Ctrl'
      }
    }
  })

  .state('tabsController.page10', {
    url: '/culturedetails',
    views: {
      'tab5': {
        templateUrl: 'templates/page10.html',
        controller: 'page10Ctrl'
      }
    }
  })

  .state('tabsController', {
    url: '/parties',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  /*
    The IonicUIRouter.js UI-Router Modification is being used for this route.
    To navigate to this route, do NOT use a URL. Instead use one of the following:
      1) Using the ui-sref HTML attribute:
        ui-sref='tabsController.allEvents'
      2) Using $state.go programatically:
        $state.go('tabsController.allEvents');
    This allows your app to figure out which Tab to open this page in on the fly.
    If you're setting a Tabs default page or modifying the .otherwise for your app and
    must use a URL, use one of the following:
      /parties/tab3/allevents
      /parties/tab4/allevents
      /parties/tab5/allevents
  */
  .state('tabsController.allEvents', {
    url: '/allevents',
    views: {
      'tab3': {
        templateUrl: 'templates/allEvents.html',
        controller: 'allPartiesCtrl'
      },
      'tab4': {
        templateUrl: 'templates/allEvents.html',
        controller: 'allEventsCtrl'
      },
      'tab5': {
        templateUrl: 'templates/allEvents.html',
        controller: 'allEventsCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/parties/parties')



});
