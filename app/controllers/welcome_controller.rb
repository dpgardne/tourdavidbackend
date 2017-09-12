class WelcomeController < ApplicationController
  def index
    render json: { status: 200, message: "Tour206 Api" }
  end
end
