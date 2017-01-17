'use strict';


export default class ScoreController {

  /* @ngInject */
  constructor(GameService, PlayerService) {
    this.gameService = GameService;
    this.playerService = PlayerService;
  }

}
