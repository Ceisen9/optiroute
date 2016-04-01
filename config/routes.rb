Rails.application.routes.draw do
  root to: "trips#index"

  resources :trips do
    member do
      post "add_destination"
  end

  resources :destinations
end
