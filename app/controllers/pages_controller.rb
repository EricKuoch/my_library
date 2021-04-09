class PagesController < ApplicationController
  def home
  end
  
  def stats
    @stats_library_books_by_week = current_user.library_books.group_by_day(:created_at, format: "%Y-%m-%d",  last: 7).count
    @stats_quotes_by_week = Quote.where(user_id:current_user).group_by_day(:created_at, format: "%Y-%m-%d",  last: 7).count
    @library_books_total = current_user.library_books.count
    @quotes_total = current_user.quotes.count
  end
end
