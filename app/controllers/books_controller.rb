class BooksController < ApplicationController
  before_action :authenticate_user!, :only => [:index]

  def index
    @library_books = current_user.library_books.order(created_at: :desc)
  end
end
