class Trip < ActiveRecord::Base
  has_many :destinations
end
