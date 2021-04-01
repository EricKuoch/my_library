class AddImageToLibraryBook < ActiveRecord::Migration[6.0]
  def change
    add_column :library_books, :image, :string
  end
end
