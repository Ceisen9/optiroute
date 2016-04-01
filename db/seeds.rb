# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
#
national_mall = Destination.create(name: "National Mall", address: "National Mall, Washington, DC")
us_capitol = Destination.create(name: "United States Capitol", address: "East Capitol St NE & First St SE, Washington, DC")
white_house = Destination.create(name: "White House", address: "1600 Pennsylvania Ave NW, Washington, DC")
lincoln_memorial = Destination.create(name: "Lincoln Memorial", address: "2 Lincoln Memorial Cir NW, Washington, DC")
natural_history_museum = Destination.create(name: "Smithsonian National Museum of Natural History", address: "Smithsonian National Museum of Natural History, Washington, DC")
national_zoo = Destination.create(name: "Smithsonian National Zoological Park", address: "3001 Connecticut Ave NW, Washington, DC")
ww2_memorial = Destination.create(name: "National World War II Memorial", address: "17th St SW, Washington, DC")
spy_museum = Destination.create(name: "International Spy Museum", address: "800 F St NW, Washington, DC ")
holocaust_museum = Destination.create(name: "United States Holocaust Memorial Museum", address: "100 Raoul Wallenberg Pl SW, Washington, DC")
newseum = Destination.create(name: "Newseum", address: "555 Pennsylvania Ave NW, Washington, DC")
national_cathedral = Destination.create(name: "Washington National Cathedral", address: "3101 Wisconsin Ave NW, Washington, DC")

route1 = Trip.create(name: "route 1")
route1.itineraries.create(destination: national_cathedral)
route1.itineraries.create(destination: ww2_memorial)
route1.itineraries.create(destination: us_capitol)
route1.itineraries.create(destination: national_mall)
route1.itineraries.create(destination: spy_museum)
