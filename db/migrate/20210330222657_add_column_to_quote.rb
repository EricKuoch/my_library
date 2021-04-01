class AddColumnToQuote < ActiveRecord::Migration[6.0]
  def change
    add_column :quotes, :pages, :integer
    add_column :quotes, :chapter, :integer
  end
end
