'use strict';


export default class GameController {

  /* @ngInject */
  constructor(GameService, PlayerService) {
    this.gameService = GameService;
    this.playerService = PlayerService;
    this.dealer = PlayerService.getDealer();
    this.player = PlayerService.getPlayer();
  }

  onDraw() {
    this.gameService.drawCard().then((card) => {
      this.card = card;
      let params = {player: this.player, card: card.value, higher: this.decision === 'high', lower: this.decision === 'low'};
      this.result = this.gameService.makePlay(params);
      this.gameService.setCurrentCard(card);
    });
  }

  onPass() {
    this.playerService.switchPlayers();
    this.dealer = this.playerService.getDealer();
    this.player = this.playerService.getPlayer();
  }
}
