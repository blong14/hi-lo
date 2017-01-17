'use strict';

import {default as Services} from './services';


describe('Deck Service Test ', () => {

  let $httpBackend, DeckService;

  beforeEach(window.module(Services.name));

  beforeEach(inject(($injector) => {
    $httpBackend = $injector.get('$httpBackend');
    DeckService = $injector.get('DeckService');
  }));

  describe('retrieving a deck of cards', () => {
    it('returns a deck', () => {
      // Mock out http call
      let mockDeck = {id: 1, remaining: 52};
      $httpBackend.whenJSONP('new/shuffle').respond(200, mockDeck);

      expect(DeckService.playingDeck).toBeNull();

      DeckService.getDeck().then((deck) => {
        expect(deck.id).toEqual(mockDeck.id);
        expect(deck.remaining).toEqual(mockDeck.remaining);
      });
    });
  });

  describe('retrieving an existing deck of cards', () => {
    it('does not make an http request', () => {
      // Mock out http call
      let mockDeck = {id: 1, remaining: 52};
      DeckService.playingDeck = mockDeck;

      expect(DeckService.playingDeck).not.toBeNull();

      DeckService.getDeck().then((deck) => {
        expect(deck.id).toEqual(mockDeck.id);
        expect(deck.remaining).toEqual(mockDeck.remaining);
      });

      $httpBackend.verifyNoOutstandingRequest();
    });
  });

  describe('drawing a card', () => {
    it('returns a card', () => {
      // Mock out http call
      let card = [{
        "image": "https://deckofcardsapi.com/static/img/KH.png",
        "value": "KING",
        "suit": "HEARTS",
        "code": "KH"
      }];
      $httpBackend.whenJSONP('id/draw').respond(200, {"success": true, "cards": card});

      expect(DeckService.playingDeck).toBeNull();

      DeckService.drawCard().then((card) => {
        expect(deck.suit).toEqual("HEARTS");
        expect(DeckService.playingDeck).not.toBeNull();
      });
    });
  });
});
