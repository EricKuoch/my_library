Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: "pages#home"
  resources :books
  resources :library_books, only: [:index, :create, :show, :destroy, :update] do 
    resources :quotes
  end
  get "/stats", to: "pages#stats"
end
