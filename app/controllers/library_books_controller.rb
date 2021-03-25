class LibraryBooksController < ApplicationController
  skip_before_action :verify_authenticity_token
  def create
    @library_book = LibraryBook.new(library_books_params.merge({library_id: Library.first.id}))
    @library_book.save
  end

  private

  def library_books_params
    params.require(:library_book).permit(:author, :publisher, :description, :genre, :title, :library_id, :image)
  end
end
