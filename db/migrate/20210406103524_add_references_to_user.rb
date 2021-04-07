class AddReferencesToUser < ActiveRecord::Migration[6.0]
  def change
    add_reference :quotes, :user, index:true
  end
end
