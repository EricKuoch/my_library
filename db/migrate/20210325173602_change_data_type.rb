class ChangeDataType < ActiveRecord::Migration[6.0]
  def change
    change_column(:library_books, :description, :text)
  end
end
