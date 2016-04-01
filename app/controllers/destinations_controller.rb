class DestinationsController < ApplicationController

  def index
  end

  private
  def destination_params
    params.require(:student).permit(:name, :address, :duration, :trip_id)
  end
end
