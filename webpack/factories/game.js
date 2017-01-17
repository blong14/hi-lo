'use strict';


const valueMap = new Map([
  ['2', 2],
  ['3', 3],
  ['4', 4],
  ['5', 5],
  ['6', 6],
  ['7', 7],
  ['8', 8],
  ['9', 9],
  ['10', 10],
  ['JACK', 11],
  ['QUEEN', 12],
  ['KING', 13],
  ['ACE', 14]
]);

const PASS_THRESHOLD = 3;


export default class Game {

  constructor(args) {
    this.plays = 0;
    this.valueMap = valueMap;
    this.currentCard = null;
    this.cardsInPile = 0;
    this.cardsRemaining = 52;
  }

  score() {
    return this.cardsInPile;
  }

  incrementPlay() {
    this.plays++;
  }

  resetPlays() {
    this.plays = 0;
  }

  isOver() {
    return this.cardsRemaining === 0;
  }

  setNumberOfCardsInPile(count) {
    this.cardsInPile = count;
  }

  getCurrentCard() {
    return this.currentCard;
  }

  canPass() {
    return this.plays >= PASS_THRESHOLD;
  }

  onPlayerSwitch() {
    this.plays = 0;
    this.cardsInPile = 0;
    this.currentCard = null;
  }

  makePlay(play) {
    let result = false;
    if (play.higher) {
      result = valueMap.get(play.card) > valueMap.get(this.getCurrentCard().value);
    } else if (play.lower) {
      result = valueMap.get(play.card) < valueMap.get(this.getCurrentCard().value);
    }

    if (result) this.incrementPlay();
    if (!result) {
      play.player.score = play.player.score + this.score();
      this.resetPlays();
      this.setNumberOfCardsInPile(0);
      this.currentCard = null;
    }

    return result;
  }
}
