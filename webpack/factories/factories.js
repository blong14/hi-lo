'use strict';

import angular from 'angular';
import gameFactory from './game.factory';
import playerFactory from './player.factory';

let factories =  angular.module('app.factories', []);

factories.factory('GameFactory', gameFactory)
         .factory('PlayerFactory', playerFactory);

export default factories;
