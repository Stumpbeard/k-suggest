'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

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
    }
  ];

  vm._mdPanel = $mdPanel;

  vm.showDialog = function(track) {
    var position = vm._mdPanel.newPanelPosition()
    .absolute()
    .center();

    var config = {
      attachTo: angular.element(document.body),
      template: '<div role="dialog" aria-label="Vid" layout="column" layout-align="center center">' +
      '  <md-toolbar>' +
      '    <div class="md-toolbar-tools">' +
      '      <h2>' + track.name + '</h2>' +
      '    </div>' +
      '  </md-toolbar>' +
      '  <iframe width="854" height="480" src="' + track.musicVid + '" frameborder="0" allowfullscreen></iframe>' +
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
}]);