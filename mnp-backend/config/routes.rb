Rails.application.routes.draw do
  resources :users
  get '/test', to: 'application#test'
end