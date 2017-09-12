class CreateShows < ActiveRecord::Migration[5.1]
  def change
    create_table :shows do |t|
      t.string :name
      t.string :start
      t.string :description

      t.timestamps
    end
  end
end
