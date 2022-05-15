class CreateNotifications < ActiveRecord::Migration[6.0]
  def change
    create_table :notifications do |t|

      t.integer :user_id, null: false
      t.integer :student_id, null: false
      t.integer :check_id, null: false
      t.string :action, default: '', null: false
      t.boolean :checked, default: false, null: false

      t.timestamps
    end

    add_index :notifications, :user_id
    add_index :notifications, :student_id
    add_index :notifications, :check_id
  end
end
