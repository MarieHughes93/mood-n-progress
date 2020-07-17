Rails.application.routes.draw do
  get 'sessions/destroy'
  namespace :api do
    namespace :v1 do
      resources :users
      resources :sessions, only: [:new, :create, :destroy]
    end
  end
  
  get 'signup', to: 'users#new', as: 'signup'
  get 'login', to: 'sessions#new', as: 'login'
  get 'logout', to: 'sessions#destroy', as: 'logout'
end