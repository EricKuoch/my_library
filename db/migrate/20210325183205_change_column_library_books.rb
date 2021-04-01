class ChangeColumnLibraryBooks < ActiveRecord::Migration[6.0]
  def change
    change_column(:library_books, :status, :integer, using: 'status::integer', default: 0)
  end
end
