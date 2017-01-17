'use strict';


export default class ScoreController {

  /* @ngInject */
  constructor(GameService, PlayerService) {
    this.gameService = GameService;
    this.player1 = PlayerService.player1;
    this.player2 = PlayerService.player2;
  }

  isActive(player) {
    return player.isPlayer();
  }
}
