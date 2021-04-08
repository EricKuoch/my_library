class BooksController < ApplicationController
  def index
    @library_books = current_user.library.library_books
  end
end
