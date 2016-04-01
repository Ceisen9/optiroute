class Trip < ActiveRecord::Base
  has_many :destinations, through: :itineraries
end
