class CreateCheckins < ActiveRecord::Migration[6.0]
  def change
    create_table :checkins do |t|
      t.datetime   :check_in_time,  null: false 
      t.datetime   :check_out_time, null: false 
      t.references :student,        null: false, foreign_key: true

      t.timestamps
    end
  end
end
