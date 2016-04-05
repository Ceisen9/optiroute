class ItinerariesController < ApplicationController
  before_action do
    if params[:id]
      @itinerary = Itinerary.find(params[:id])
    end
  end

  def index
    @itineraries = Itinerary.all
    render json: @itineraries, status: :ok
  end

  def create
    @itinierary = Itinerary.create!(itinerary_params)
    render json: @trip, status: :ok
  end

  def destroy
    @itinerary.destroy
    render json: {sucess: true}, status: :ok
  end

  private
  def itinerary_params
    params.require(:itinerary).permit(:trip_id, :destination_id)
  end

end
