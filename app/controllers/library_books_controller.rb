class LibraryBooksController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index 
    @library_books = current_user.library.library_books
  end

  def new

  end

  def show
    @library_book = LibraryBook.find(params[:id])
    @library_book.quotes.order(:description)
  end

  def destroy
    @library_book = LibraryBook.find(params[:id])
    @library_book.destroy!
    redirect_to library_books_path, :notice => "Your patient has been deleted"
  end

  def update
    @library_book = LibraryBook.find(params[:id])
    @library_book.update(library_books_params)
    
  end

  def create
    @library_book = LibraryBook.new(library_books_params.merge({library_id: current_user.library.id}))
    @library_book.save
    redirect_to library_book_path(@library_book)
  end


  private

  def library_books_params
    params.require(:library_book).permit(:id, :author, :status, :description, :genre, :title, :library_id, :image, quotes_attributes: [:id, :description, :pages, :chapter])
  end
end
