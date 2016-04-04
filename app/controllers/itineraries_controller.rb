class ItinerariesController < ApplicationController

  def index
    @itineraries = Itinerary.all
    render json: @itineraries, status: :ok
  end
end
