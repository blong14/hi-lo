'use strict';

import {default as Factories} from './factories';


describe('Game Test', () => {

  let GameFactory, game;

  beforeEach(() => {
    window.module(Factories.name);
  });

  beforeEach(inject(($injector) => {
    GameFactory = $injector.get('GameFactory');
    game = GameFactory.createGame();
  }));

  describe('determines if game is over', () => {
    it('should not be over', () => {
      expect(game.isOver()).toBe(false);
    });

    it('should be over', () => {
      expect(game.isOver()).toBe(false);

      // end game
      game.cardsRemaining = 0;
      expect(game.isOver()).toBe(true);
    });
  });

  describe('make play', () => {
    it('records a play', () => {
      game.currentCard = {value: '2'};
      let result = game.makePlay({player: {score: 0}, higher: true, card: 'JACK'});
      expect(result).toBe(true);
    });

    it('records play as lower against higher card', () => {
      // Mock current game
      game.currentCard = {value: 'QUEEN'};
      let result = game.makePlay({player: {score: 0}, lower: true, card: '2'});
      expect(result).toBe(true);
    });

    it('records play as higher against higher card', () => {
      // Mock current game
      game.currentCard = {value: 'KING'};
      let result = game.makePlay({player: {score: 0}, higher: true, card: '2'});
      expect(result).toBe(false);
    });

    it('records play as lower against lower card', () => {
      // Mock current game
      game.currentCard = {value: 'QUEEN'};
      let result = game.makePlay({player: {score: 0}, lower: true, card: 'KING'});
      expect(result).toBe(false);
    });

    it('records play as higher against same card', () => {
      // Mock current game
      game.currentCard = {value: '2'};
      let result = game.makePlay({player: {score: 0}, higher: true, card: '2'});
      expect(result).toBe(false);
    });
  });
});
