class TripsController < ApplicationController
  before_action do
    if params[:id]
      @trip = Trip.find(params[:id])
    end
  end

  def index
    @trips = Trip.all
    respond_to do |format|
      format.html
      format.json{ render json: @trips, status: :ok }
    end
  end

  def show
    render json: @trip, status: :ok
  end

  def create
    @trip = Trip.create!(trip_params)
    self.add_destination
    render json: @trip, status: :ok
  end

  def update
    @trip.update!(trip_params)
    self.add_destination
    render json: @trip, status: :ok
  end

  def add_destination
    if params[:destination_id]
      @destination = Destination.find(params[:destination_id])
      @trip.itineraries.create!(destination: @destination)
    end
  end

  def destroy
    @trip.destroy
    render json: {sucess: true}, status: :ok
  end

  private
  def trip_params
    params.require(:trip).permit(:name, :duration)
  end
end
