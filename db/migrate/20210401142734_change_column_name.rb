class ChangeColumnName < ActiveRecord::Migration[6.0]
  def change
    rename_column :quotes, :quote, :description
  end
end
