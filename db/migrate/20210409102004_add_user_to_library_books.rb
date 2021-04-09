class AddUserToLibraryBooks < ActiveRecord::Migration[6.0]
  def change
    add_reference :library_books, :user, foreign_key: true
  end
end
