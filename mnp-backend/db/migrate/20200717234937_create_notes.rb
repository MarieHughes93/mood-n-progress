class CreateNotes < ActiveRecord::Migration[5.2]
  def change
    create_table :notes do |t|
      t.string :title
      t.text :content
      t.belongs_to :user, foreign_key: {on_delete: :cascade}
    end
  end
end
