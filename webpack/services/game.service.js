'use strict';


export default class GameService {

  /* @ngInject */
  constructor(GameFactory, DeckService, PlayerService) {
    this.gameFactory = GameFactory;
    this.currentGame = GameFactory.createGame([
      PlayerService.player1,
      PlayerService.player2
    ]);
    this.deckService = DeckService;
  }

  drawCard() {
    return this.deckService.drawCard().then((cards) => {
      this.deckService.addToPile(cards[0]).then((response) => {
        this.setNumberOfCardsInPile(response.data.piles[this.deckService.pileName].remaining);
      });
      return cards[0];
    });
  }

  setCurrentCard(card) {
    this.currentGame.currentCard = card;
  }

  setNumberOfCardsInPile(count) {
    this.currentGame.setNumberOfCardsInPile(count);
  }

  currentCard() {
    return this.currentGame.currentCard;
  }

  getScore() {
    return this.currentGame.score();
  }

  getPlays() {
    return this.currentGame.plays;
  }

  isOver() {
    return this.currentGame.isOver();
  }

  makePlay(play) {
    let result = this.currentGame.makePlay(play);
    if (!result) {
      // reset the pile
      this.deckService.shuffleDeck().then(() => {
        this.setNumberOfCardsInPile(0);
      });
    }

    return result;
  }

  resetGame() {
    this.currentGame = this.gameFactory.createGame();
  }
}
