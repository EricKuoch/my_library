class RemoveBookFromLibraryBooks < ActiveRecord::Migration[6.0]
  def change
    remove_reference :library_books, :book, null: false, foreign_key: true
  end
end
