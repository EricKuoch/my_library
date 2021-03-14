class CreateBooks < ActiveRecord::Migration[6.0]
  def change
    create_table :publishers do |t|
      t.string :name

      t.timestamps
    end
    create_table :books do |t|
      t.string :title
      t.integer :total_pages
      t.float :rating
      t.date :published_date
      t.references :publisher, null: false, foreign_key: true

      t.timestamps
    end
  end
end
