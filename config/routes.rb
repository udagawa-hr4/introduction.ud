Rails.application.routes.draw do
  root to: "profiles#index"
  # resources :profiles,only: [:index]
end
