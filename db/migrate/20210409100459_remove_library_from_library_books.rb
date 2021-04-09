class RemoveLibraryFromLibraryBooks < ActiveRecord::Migration[6.0]
  def change
    remove_reference :library_books, :library, index: true, foreign_key: true
  end
end
