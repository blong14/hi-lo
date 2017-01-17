'use strict';

import template from './player.component.html';
import PlayerController from './player.controller';


let playerComponent = {
  bindings: {
    onDraw: '&',
    onPass: '&'
  },
  restrict: 'E',
  template: template,
  controller: PlayerController,
  controllerAs: '$ctrl'
};

export default playerComponent
