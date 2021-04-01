class QuotesController < ApplicationController

  def create
    @quote = Quote.new(description: params[:description], chapter: params[:chapter], pages: params[:pages], library_book_id: params[:library_book_id])
    @quote.save
    redirect_to library_book_path(params[:library_book_id])
  end
  
  def destroy
    @quote = Quote.find(params[:id])
    @library_book = LibraryBook.find(params[:library_book_id])
    @quote.destroy!
    redirect_to library_book_path(@library_book)
  end

  private

  def quote_params
    params.require(:quote).permit(:id, :description, :library_book_id, :chapter, :pages)
  end

end
