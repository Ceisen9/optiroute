# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160401185915) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "destinations", force: :cascade do |t|
    t.string  "name"
    t.string  "address"
    t.integer "duration"
  end

  create_table "itineraries", force: :cascade do |t|
    t.integer "trip_id"
    t.integer "destination_id"
  end

  add_index "itineraries", ["destination_id"], name: "index_itineraries_on_destination_id", using: :btree
  add_index "itineraries", ["trip_id"], name: "index_itineraries_on_trip_id", using: :btree

  create_table "trips", force: :cascade do |t|
    t.string  "name"
    t.integer "duration"
  end

  add_foreign_key "itineraries", "destinations"
  add_foreign_key "itineraries", "trips"
end
