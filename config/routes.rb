Rails.application.routes.draw do
  resources :users
  resources :admins
  root 'users#index'
end
