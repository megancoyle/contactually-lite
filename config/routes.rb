Rails.application.routes.draw do
  root 'contacts#new'

  post '/contacts/load' => 'contacts#load'

  get '/contacts' => 'contacts#index'

  resources :contacts, only: [:index, :create, :destroy]
end
