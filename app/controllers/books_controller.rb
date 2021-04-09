class BooksController < ApplicationController
  def index
    @library_books = current_user.library_books.order(created_at: :desc)
  end
end
