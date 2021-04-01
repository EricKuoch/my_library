class CreateQuotes < ActiveRecord::Migration[6.0]
  def change
    create_table :quotes do |t|
      t.references :library_book
      t.text :quote
      t.references :author

      t.timestamps
    end
  end
end
