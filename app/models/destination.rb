class Destination < ActiveRecord::Base

  has_many :trips, through: :itineraries
end
