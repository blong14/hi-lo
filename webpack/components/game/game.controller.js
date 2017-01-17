'use strict';


export default class GameController {

  /* @ngInject */
  constructor(GameService, PlayerService) {
    this.gameService = GameService;
    this.playerService = PlayerService;
    this.dealer = PlayerService.getDealer();
    this.player = PlayerService.getPlayer();
    this.faceUpCards = 0;
    this.initialDraw = true;
    this.decision = 'low';
  }

  onDraw() {
    this.gameService.drawCard().then((card) => {
      this.card = card;

      if (!this.card) {
        alert('game over');
        return;
      }

      if (this.initialDraw) {
        this.initialDraw = false;
        this.gameService.setCurrentCard(card);
        this.gameService.addCardToPile(card);
        return;
      }
      let params = {player: this.player, card: card.value, higher: this.decision === 'high', lower: this.decision === 'low'};
      this.result = this.gameService.makePlay(params);
      this.gameService.setCurrentCard(card);
      this.gameService.addCardToPile(card);
    });
  }

  onPass() {
    if (!this.canPass()) return;

    this.playerService.switchPlayers();
    this.dealer = this.playerService.getDealer();
    this.player = this.playerService.getPlayer();
    this.gameService.onSwitch();
  }

  canPass() {
    return this.gameService.canPass();
  }

  onResetGame() {
    this.card = null;
    this.initialDraw = true;
    this.gameService.resetGame();
  }
}
