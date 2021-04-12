class PagesController < ApplicationController
  RANGE = DateTime.now.beginning_of_month..DateTime.now.end_of_month

  def home
    unless current_user
      render
    else
      @quotes = current_user.quotes.includes(:library_book).map { |quote| "#{quote.description.capitalize} by #{quote.library_book.author}" }
      @quotes = @quotes.shuffle
    end
  end

  def stats
    @stats_library_books_by_month = current_user.library_books.group_by_day(:created_at, format: "%m-%d", range: RANGE).count
    @stats_quotes_by_month = Quote.where(user_id:current_user).group_by_day(:created_at, format: "%m-%d", range: RANGE).count
    @library_books_total = current_user.library_books.count
    @library_books = current_user.library_books
    @quotes_total = current_user.quotes.count
  end
end
