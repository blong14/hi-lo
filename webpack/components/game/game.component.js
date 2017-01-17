'use strict';

import template from './game.component.html';
import GameController from './game.controller';


let gameComponent = {
  restrict: 'E',
  template: template,
  controller: GameController,
  controllerAs: '$ctrl'
};

export default gameComponent;
