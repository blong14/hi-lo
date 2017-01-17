'use strict';

import template from './card.component.html';
import CardController from './card.controller';


let cardComponent = {
  bindings: {
    currentCard: '<'
  },
  restrict: 'E',
  template: template,
  controller: CardController,
  controllerAs: '$ctrl'
};

export default cardComponent
