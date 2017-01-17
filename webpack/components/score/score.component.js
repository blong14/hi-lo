'use strict';

import template from './score.component.html';
import ScoreController from './score.controller';


let scoreComponent = {
  restrict: 'E',
  template: template,
  controller: ScoreController,
  controllerAs: '$ctrl'
};

export default scoreComponent;
