class PagesController < ApplicationController
  def home
  end
  
  def stats
    @stats_library_books = current_user.library.library_books.group_by_day(:created_at, format: "%Y-%m-%d",  last: 7).count
    @stats_quotes = Quote.where(user_id:current_user).group_by_day(:created_at, format: "%Y-%m-%d",  last: 7).count
    @library_books = Quote.where(user_id:current_user).group_by_day(:created_at, format: "%Y-%m-%d",  last: 7).count
  end
end
