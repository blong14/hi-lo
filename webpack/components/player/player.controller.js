'use strict';


export default class PlayerController {

  /* @ngInject */
  constructor(GameService) {
    this.gameService = GameService;
  }

  drawCard() {
    this.onDraw();
  };

  pass() {
    this.onPass();
  };
}
