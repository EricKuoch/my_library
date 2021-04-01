class AddColumnToLibraryBook < ActiveRecord::Migration[6.0]
  def change
    add_column :library_books, :genre, :string
    add_column :library_books, :author, :string
    add_column :library_books, :publisher, :string
    add_column :library_books, :description, :string
  end
end
