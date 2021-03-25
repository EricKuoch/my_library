class BooksController < ApplicationController
  def index
    @library_books = LibraryBook.all
  end
end
