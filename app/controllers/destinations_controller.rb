class DestinationsController < ApplicationController
  before_action do
    if params[:id]
      @destination = Destination.find(params[:id])
    end
  end

  def index
    @destinations = Destination.all
    respond_to do |format|
      format.html
      format.json{ render json: @destinations, status: :ok }
    end
  end

  def create
    @destination = Destination.create!(destination_params)
    render json: @destination, status: :ok
  end


  def show
    render json: @destination, status: :ok
  end

  # We don't need the following unless destinations become writable

  private
  def destination_params
    params.require(:destination).permit(:name, :address, :duration)
  end
end
