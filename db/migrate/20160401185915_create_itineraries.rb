class CreateItineraries < ActiveRecord::Migration
  def change
    create_table :itineraries do |t|
      t.references :trip, index: true, foreign_key: true
      t.references :destination, index: true, foreign_key: true
    end
  end
end
