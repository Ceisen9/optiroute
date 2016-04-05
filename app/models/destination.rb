class Destination < ActiveRecord::Base
  has_many :itineraries
  has_many :trips, through: :itineraries, dependent: :destroy
end
