class AddTitleToLibraryBook < ActiveRecord::Migration[6.0]
  def change
    add_column :library_books, :title, :string
  end
end
