require_relative '../services/deck_service'

class DeckController < ApplicationController

  def get_deck
    deck = DeckService.get_deck()
    render json: deck
  end

  def draw_card
    card = DeckService.draw_card(params)
    render json: card
  end

  def add_to_pile
    response = DeckService.add_to_pile(params)
    render json: response
  end
end
