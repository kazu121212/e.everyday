class CreateChecks < ActiveRecord::Migration[6.0]
  def change
    create_table :checks do |t|
      t.datetime   :check_in_time 
      t.datetime   :check_out_time 
      t.blob       :image

      t.references :student,         foreign_key: true

      t.timestamps
    end
  end
end
