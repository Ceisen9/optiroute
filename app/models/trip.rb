class Trip < ActiveRecord::Base
  has_many :itineraries
  has_many :destinations, through: :itineraries, dependent: :destroy
end
