class LibraryBooksController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_library_book, only: [:update, :show]

  def index 
    @library_books = current_user.library.library_books
  end

  def new
  end

  def show
    @library_book
  end

  def destroy
    @library_book = LibraryBook.find(params[:id])
    @library_book.destroy!
    redirect_to library_books_path, :notice => "Your book has been deleted"
  end

  def update
    @library_book.update(library_books_params)
  end

  def create
    @library_book = LibraryBook.new(library_books_params.merge({library_id: current_user.library.id}))
    respond_to do |format|
      if @library_book.save
        format.js
        format.html
      else
        redirect_to books_path
      end
    end
  end

  private

  def set_library_book
    @library_book = LibraryBook.find(params[:id])
  end

  def library_books_params
    params.require(:library_book).permit(:id, :author, :status, :description, :genre, :title, :library_id, :image, quotes_attributes: [:id, :description, :pages, :chapter])
  end
end
