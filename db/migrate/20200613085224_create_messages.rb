class CreateMessages < ActiveRecord::Migration[6.0]
  def change
    create_table :messages do |t|
      t.references :group, foreign_key:true, null: false
      t.references :user, foreign_key:true, null: false
      t.text :body
      t.string :image
      t.timestamps
    end
  end
end
