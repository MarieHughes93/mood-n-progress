class Api::V1::SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.find_by_email(params[:email])
    if @user && @user.authenticate(params[:user][:password])
      session[:user_id] = @user.id
      render json: @user
    else
      return null
    end
  end

  def destroy
    session[:user_id] = nil
  end
end
