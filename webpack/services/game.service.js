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
    this.playerService = PlayerService;
  }

  drawCard() {
    return this.deckService.drawCard().then((cards) => {
      this.currentGame.cardsRemaining = this.deckService.playingDeck.remaining;
      return cards[0];
    });
  }

  setCurrentCard(card) {
    this.currentGame.currentCard = card;
  }

  addCardToPile(card) {
    this.deckService.addToPile(card).then((response) => {
      this.setNumberOfCardsInPile(response.data.piles[this.deckService.pileName].remaining);
    });
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

  canPass() {
    return this.currentGame.canPass();
  }

  makePlay(play) {
    let result = this.currentGame.makePlay(play);
    if (!result) {
      // reset the pile
      this.deckService.resetPile();
    }

    return result;
  }

  onSwitch() {
    this.currentGame.onPlayerSwitch();
    this.deckService.resetPile();
  }

  resetGame() {
    this.playerService.init();
    this.currentGame = this.gameFactory.createGame([
      this.playerService.player1,
      this.playerService.player2
    ]);
    this.deckService.shuffleDeck();
  }
}
