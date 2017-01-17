'use strict';

import angular from 'angular';
import Card from './card/card';
import Game from './game/game';
import Score from './score/score';


export default angular.module('app.components', [Card.name, Game.name, Score.name]);
