class TripsController < ApplicationController

  def index
    @trips = Trip.all
  end

  def show
    @trip = Trip.find(params[:id])
  end

  def new
    @trip = Trip.new
  end

  private
  def trip_params
    params.require(:trip).permit(:name, :duration)
  end
end
