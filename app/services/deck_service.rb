class DeckService
  include HTTParty

  base_uri "http://deckofcardsapi.com"

  def self.get_deck
    self.get('/api/deck/new/shuffle').parsed_response
  end

  def self.draw_card(params)
    self.get("/api/deck/#{params[:id]}/draw").parsed_response
  end

  def self.add_to_pile(params)
    self.post("/api/deck/#{params[:id]}/pile/#{params[:pile_name]}/add", query: {cards: params[:cards]}).parsed_response
  end
end
