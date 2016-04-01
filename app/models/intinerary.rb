class Itinerary < ActiveRecord::Base
  belongs_to :destinations
  belongs_to :trips
end
