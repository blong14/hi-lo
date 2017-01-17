'use strict';

import angular from 'angular';
import Card from './card/card';
import Game from './game/game';
import Score from './score/score';
import Player from './player/player';


export default angular.module('app.components', [Card.name, Game.name, Score.name, Player.name]);
