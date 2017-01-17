'use strict';

class PlayingDeck {

  constructor(args) {
    this.id = args.deck_id;
    this.shuffled = args.shuffled;
    this.remaining = args.remaining;
  }
}

export default class DeckService {

  /* @ngInject */
  constructor($q, $http) {
    this.$q = $q;
    this.$http = $http;
    this.playingDeck = null;
    this.pileName = "faceup";
  }

  getDeck() {
    if (this.playingDeck) return this.$q.when(this.playingDeck);

    return this.$http.get('/deck').then((response) => {
      this.playingDeck = new PlayingDeck(response.data);
      return this.playingDeck;
    });
  }

  drawCard() {
    return this.getDeck().then((deck) => {
      if (deck.remaining) {
        return this.$http.get(`/deck/${deck.id}/draw`, {params: {count: 1}});
      }
    }).then((response) => {
      this.playingDeck.remaining = response.data.remaining;
      return response.data.cards;
    }).catch((error) => {
      return [];
    });
  }

  addToPile(card) {
    return this.getDeck().then((deck) => {
      if (deck.remaining) {
        return this.$http.post(`/deck/${deck.id}/pile/${this.pileName}/add`, {cards: card.code});
      }
    });
  }

  shuffleDeck() {
    this.playingDeck = null;
    return this.getDeck();
  }
}
