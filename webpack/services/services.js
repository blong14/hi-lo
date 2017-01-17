'use strict';

import angular from 'angular';
import DeckService from './deck.service';
import GameService from './game.service';
import PlayerService from './player.service';


let services =  angular.module('app.services', []);

services.$inject = ['$httpProvider'];

services.config(($httpProvider) => {
  $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
}).service('DeckService', DeckService)
  .service('GameService', GameService)
  .service('PlayerService', PlayerService);

export default services
