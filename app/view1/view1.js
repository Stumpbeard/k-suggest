'use strict';

angular.module('myApp.view1', ['ngRoute', 'ngMaterial'])

.controller('View1Ctrl', ['$mdPanel', function($mdPanel) {
  var vm = this;
  vm.test = "test";

  vm.ratings = [
    {
      group: 'SHINee',
      image: 'https://koreaworldentertainment.files.wordpress.com/2016/10/shinee-21.jpg',
      tracks: [
        {
          name: 'Married To The Music',
          hipHop: 0.0,
          modernity: 0.4,
          musicVid: 'https://www.youtube.com/embed/bcu7yZBeSKw',
          lyricVid: 'https://www.youtube.com/embed/wzusorY7Wto'
        },
        {
          name: 'Get The Treasure',
          hipHop: 0.3,
          modernity: 0.7,
          musicVid: 'https://www.youtube.com/embed/P4Qyk9IBI2s',
          lyricVid: 'Unavailable'
        },
        {
          name: 'View',
          hipHop: 0.0,
          modernity: 1.0,
          musicVid: 'https://www.youtube.com/embed/UF53cptEE5k',
          lyricVid: 'https://www.youtube.com/embed/_-WqVz2ZDik'
        }
      ],
      wiki: 'https://en.wikipedia.org/wiki/Shinee'
    },
    {
      group: 'BTS',
      image: 'http://pm1.narvii.com/5833/eeaa73a30cfeae2305b38a57eb4f114b0999b041_hq.jpg',
      tracks: [
        {
          name: 'Dope',
          hipHop: 0.8,
          modernity: 1.0,
          musicVid: 'https://www.youtube.com/embed/BVwAVbKYYeM',
          lyricVid: 'https://www.youtube.com/embed/aE0jGE75SRU'
        },
        {
          name: 'Silver Spoon',
          hipHop: 1.0,
          modernity: 1.0,
          musicVid: 'https://www.youtube.com/embed/bPM7uIuB2Gs',
          lyricVid: 'https://www.youtube.com/embed/9qC7HNFRjEY'
        },
        {
          name: 'Blood, Sweat, Tears',
          hipHop: 0.4,
          modernity: 1.0,
          musicVid: 'https://www.youtube.com/embed/hmE9f-TEutc',
          lyricVid: 'https://www.youtube.com/embed/YX-k2lk58L0'
        }
      ],
      wiki: 'https://en.wikipedia.org/wiki/BTS_(band)'
    }
  ];

  vm._mdPanel = $mdPanel;

  vm.showDialog = function(track) {
    var position = vm._mdPanel.newPanelPosition()
    .absolute()
    .center();

    var config = {
      attachTo: angular.element(document.body),
      template: '<div role="dialog" aria-label="Video" layout="column" layout-align="center center" width="854">' +
      '  <md-toolbar>' +
      '    <div class="md-toolbar-tools" layout="row" layout-align="space-between center">' +
      '      <h2 flex="auto">' + track.name + '</h2>' +
      '      <span>{{this.videoStyle || \'Music Video\'}}&nbsp;</span>' +
      '      <md-switch ng-model="this.videoStyle" aria-label="Video Switch" ng-true-value="\'Lyric Video\'" ng-false-value="\'Music Video\'"></md-switch>' +
      '    </div>' +
      '  </md-toolbar>' +
      '  <iframe ng-if="this.videoStyle == \'Music Video\' || !this.videoStyle" width="854" height="480" src="' + track.musicVid + '" frameborder="0" allowfullscreen></iframe>' +
      '  <iframe ng-if="this.videoStyle == \'Lyric Video\'" width="854" height="480" src="' + track.lyricVid + '" frameborder="0" allowfullscreen></iframe>' +
      '</div>',
      hasBackdrop: true,
      position: position,
      trapFocus: true,
      zIndex: 150,
      clickOutsideToClose: true,
      escapeToClose: true,
      focusOnOpen: true
    };

    vm._mdPanel.open(config);
  };
}])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}]);