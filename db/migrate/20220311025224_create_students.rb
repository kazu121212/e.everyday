class CreateStudents < ActiveRecord::Migration[6.0]
  def change
    create_table :students do |t|
      t.string     :first_name,        null: false
      t.string     :last_name,        null: false
      t.string     :course,           null: false
      t.references :user,             null: false, foreign_key: true
      t.timestamps
    end
  end
end
