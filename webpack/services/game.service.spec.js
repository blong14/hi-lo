'use strict';

import {default as Services} from './services';
import {default as Factories} from '../factories/factories';
import GameFactory from '../factories/game.factory';


describe('Game Service Test', () => {

  let GameService, GameFactory, mockGame;

  beforeEach(() => {
    window.module(Services.name);
    window.module(Factories.name);
  });

  beforeEach(inject(($injector) => {
    GameFactory = $injector.get('GameFactory');

    // Mock out the game
    mockGame = GameFactory.createGame();
    mockGame.plays = 10;
    mockGame.count = 3;
    spyOn(GameFactory, "createGame").and.returnValue(mockGame);

    GameService = $injector.get('GameService');
    expect(GameService.currentGame).toEqual(mockGame);
  }));

  describe('retrieving the score', () => {
    it('returns the score', () => {
      expect(GameService.getScore()).not.toBeNull();
      expect(GameService.getScore()).toEqual(mockGame.score());
    });
  });

  describe('retrieving the player plays', () => {
    it('returns the plays', () => {
      expect(GameService.getPlays()).not.toBeNull();
      expect(GameService.getPlays()).toEqual(mockGame.plays);
    });
  });

  describe('make play', () => {
    it('records a play', () => {
      spyOn(GameService.currentGame, 'makePlay');
      GameService.currentGame.currentCard = {value: 'QUEEN'};
      GameService.makePlay({higher: true, card: 'JACK'});
      expect(GameService.currentGame.makePlay).toHaveBeenCalled();
    });
  });
});
