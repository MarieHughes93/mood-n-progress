Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users
      post 'signup', to: 'users#create', as: 'signup'
      get 'login/:username', to: 'users#login', as: 'login'
    end
  end
  
end