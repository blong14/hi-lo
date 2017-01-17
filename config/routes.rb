Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'index#index'

  get 'deck', to: 'deck#get_deck'
  get 'deck/:id/draw', to: 'deck#draw_card'
  post 'deck/:id/pile/:pile_name/add', to: 'deck#add_to_pile'
end
