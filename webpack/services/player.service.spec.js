'use strict';

import {default as Services} from './services';
import {default as Factories} from '../factories/factories';


describe('Player Service Test', () => {

  let PlayerService;

  beforeEach(() => {
    window.module(Services.name);
    window.module(Factories.name);
  });

  beforeEach(inject(($injector) => {
    PlayerService = $injector.get('PlayerService');
    PlayerFactory = $injector.get('PlayerFactory');
  }));

  describe('retrieving the dealer', () => {
    it('returns the dealer', () => {
      let dealer = PlayerService.getDealer();
      expect(dealer).not.toBeNull();
      expect(dealer.isDealer()).toBe(true);
    });
  });

  describe('retrieving the player', () => {
    it('returns the player', () => {
      let player = PlayerService.getPlayer();
      expect(player).not.toBeNull();
      expect(player.isPlayer()).toBe(true);
    });
  });
});
