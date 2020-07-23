Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      post 'signup', to: 'users#create', as: 'signup'
      get 'login/:username', to: 'users#login', as: 'login'
      resources :users do
        resources :notes
      end
    end
  end
  
end