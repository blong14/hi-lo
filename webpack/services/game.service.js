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
      this.deckService.addToPile(cards[0]).then((response) => {
        this.setNumberOfCardsInPile(response.data.piles[this.deckService.pileName].remaining);
      });
      this.currentGame.cardsRemaining = this.deckService.playingDeck.remaining;
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

  canPass() {
    return this.currentGame.canPass();
  }

  makePlay(play) {
    let result = this.currentGame.makePlay(play);
    if (!result) {
      // reset the pile
      this.deckService.shuffleDeck();
    }

    return result;
  }

  onSwitch() {
    this.deckService.playingDeck = null;
    this.currentGame.onPlayerSwitch();
  }

  resetGame() {
    this.playerService.init();
    this.currentGame = this.gameFactory.createGame([
      this.playerService.player1,
      this.playerService.player2
    ]);
  }
}
