'use strict';

angular.module('myApp.view1', ['ngRoute', 'ngMaterial'])

.controller('View1Ctrl', ['$mdPanel', function($mdPanel) {
  var vm = this;
  vm.test = "test";
  vm.hipHopSlider = 10;
  vm.modernitySlider = 0;

  vm.checkTracks = function(artist){
    return artist.tracks.filter(function(track){
      return (track.hipHop <= vm.hipHopSlider && track.modernity >= vm.modernitySlider);
    }).length;
  };

  vm.ratings = [
    {
      group: 'SHINee',
      image: 'https://koreaworldentertainment.files.wordpress.com/2016/10/shinee-21.jpg',
      tracks: [
        {
          name: 'Married To The Music',
          hipHop: 0,
          modernity: 4,
          musicVid: 'https://www.youtube.com/embed/bcu7yZBeSKw',
          lyricVid: 'https://www.youtube.com/embed/wzusorY7Wto'
        },
        {
          name: 'Get The Treasure',
          hipHop: 3,
          modernity: 7,
          musicVid: 'https://www.youtube.com/embed/P4Qyk9IBI2s',
          lyricVid: 'Unavailable'
        },
        {
          name: 'View',
          hipHop: 0,
          modernity: 10,
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
          hipHop: 8,
          modernity: 10,
          musicVid: 'https://www.youtube.com/embed/BVwAVbKYYeM',
          lyricVid: 'https://www.youtube.com/embed/aE0jGE75SRU'
        },
        {
          name: 'Silver Spoon',
          hipHop: 10,
          modernity: 10,
          musicVid: 'https://www.youtube.com/embed/bPM7uIuB2Gs',
          lyricVid: 'https://www.youtube.com/embed/9qC7HNFRjEY'
        },
        {
          name: 'Blood, Sweat, Tears',
          hipHop: 4,
          modernity: 10,
          musicVid: 'https://www.youtube.com/embed/hmE9f-TEutc',
          lyricVid: 'https://www.youtube.com/embed/YX-k2lk58L0'
        }
      ],
      wiki: 'https://en.wikipedia.org/wiki/BTS_(band)'
    },
    {
      group: 'Big Bang',
      image: 'http://bigbangupdates.com/wp-content/uploads/2016/02/frau1.jpeg',
      tracks: [
        {
          name: 'FXXK IT',
          hipHop: 5,
          modernity: 7,
          musicVid: 'https://www.youtube.com/embed/iIPH8LFYFRk',
          lyricVid: 'https://www.youtube.com/embed/nBLIn7PcIH0'
        },
        {
          name: 'Lies',
          hipHop: 6,
          modernity: 2,
          musicVid: 'https://www.youtube.com/embed/2Cv3phvP8Ro',
          lyricVid: 'https://www.youtube.com/embed/Hy0W7AqDC_c'
        },
        {
          name: 'Fantastic Baby',
          hipHop: 7,
          modernity: 6,
          musicVid: 'https://www.youtube.com/embed/AAbokV76tkU',
          lyricVid: 'https://www.youtube.com/embed/j1XRCmtwuuU'
        }
      ],
      wiki: 'https://en.wikipedia.org/wiki/Big_Bang_(South_Korean_band)'
    },
    {
      group: 'Taemin',
      image: 'http://2.bp.blogspot.com/-6L8xAvK894g/U-5GvGvNwNI/AAAAAAAA8Os/q-5t1p_6T30/s1600/3.png',
      tracks: [
        {
          name: 'Drip Drop',
          hipHop: 0,
          modernity: 10,
          musicVid: 'https://www.youtube.com/embed/Oz3mm3tPKfg',
          lyricVid: 'https://www.youtube.com/embed/WGRfHGVFN5s'
        },
        {
          name: 'Danger',
          hipHop: 2,
          modernity: 10,
          musicVid: 'https://www.youtube.com/embed/UF8m2JIDjKU',
          lyricVid: 'https://www.youtube.com/embed/vnisUp6e-_Y'
        },
        {
          name: 'Press Your Number',
          hipHop: 0,
          modernity: 7,
          musicVid: 'https://www.youtube.com/embed/XsOGiTSZ_cg',
          lyricVid: 'https://www.youtube.com/embed/85B9mjmSmEM'
        }
      ],
      wiki: 'https://en.wikipedia.org/wiki/Lee_Tae-min'
    },
    {
      group: 'NCT 127',
      image: 'http://smboysgeneration.com/wp-content/uploads/2017/04/NCT-127-Profile-and-Facts.jpg',
      tracks: [
        {
          name: 'Fire Truck',
          hipHop: 10,
          modernity: 10,
          musicVid: 'https://www.youtube.com/embed/_psXn_VJ_AE',
          lyricVid: 'https://www.youtube.com/embed/cVdmD_J8feY'
        },
        {
          name: 'Limitless',
          hipHop: 7,
          modernity: 10,
          musicVid: 'https://www.youtube.com/embed/RW8iyJcmve4',
          lyricVid: 'https://www.youtube.com/embed/6KYM1IuGDns'
        },
        {
          name: 'Summer 127',
          hipHop: 3,
          modernity: 8,
          musicVid: 'https://www.youtube.com/embed/bOlaTvuC8U4',
          lyricVid: 'https://www.youtube.com/embed/fYyiG3vl8cw'
        }
      ],
      wiki: 'https://en.wikipedia.org/wiki/NCT_(band)'
    },
    {
      group: 'EXO',
      image: 'http://img.kpopmap.com/wp-content/uploads_kpopmap/2017/01/exo-duty-free4.jpg',
      tracks: [
        {
          name: 'Lucky One',
          hipHop: 1,
          modernity: 8,
          musicVid: 'https://www.youtube.com/embed/73QzQYN8FtE',
          lyricVid: 'https://www.youtube.com/embed/DEgQFr7no8A'
        },
        {
          name: 'Call Me Baby',
          hipHop: 4,
          modernity: 5,
          musicVid: 'https://www.youtube.com/embed/yWfsla_Uh80',
          lyricVid: 'https://www.youtube.com/embed/YORwzTR97uA'
        },
        {
          name: 'MAMA',
          hipHop: 2,
          modernity: 6,
          musicVid: 'https://www.youtube.com/embed/KH6ZwnqZ7Wo',
          lyricVid: 'https://www.youtube.com/embed/5f5Kt8KSxI0'
        }
      ],
      wiki: 'https://en.wikipedia.org/wiki/Exo_(band)'
    }
  ];

  vm._mdPanel = $mdPanel;

  vm.showDialog = function(track) {
    var position = vm._mdPanel.newPanelPosition()
    .absolute()
    .center();

    var config = {
      attachTo: angular.element(document.body),
      template: '<div role="dialog" aria-label="Video" layout="column" layout-align="center center">' +
      '  <md-toolbar>' +
      '    <div class="md-toolbar-tools" layout="row" layout-align="space-between center">' +
      '      <h2 flex="auto">' + track.name + '</h2>' +
      '      <span>{{this.videoStyle || \'Music Video\'}}&nbsp;</span>' +
      '      <md-switch ng-model="this.videoStyle" aria-label="Video Switch" ng-true-value="\'Lyric Video\'" ng-false-value="\'Music Video\'"></md-switch>' +
      '    </div>' +
      '  </md-toolbar>' +
      '  <div class="video-panel">' +
      '    <iframe ng-if="this.videoStyle == \'Music Video\' || !this.videoStyle" width="854px" height="480px" src="' + track.musicVid + '" frameborder="0" allowfullscreen></iframe>' +
      '    <iframe ng-if="this.videoStyle == \'Lyric Video\'" width="854px" height="480px" src="' + track.lyricVid + '" frameborder="0" allowfullscreen></iframe>' +
      '  </div>' +
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

  vm.mobilecheck = function() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
  };
}])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}]);