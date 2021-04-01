class BooksController < ApplicationController
  def index
    @library_books = LibraryBook.all
    @current_reading = current_user.library.library_books.reading.first
  end
end
