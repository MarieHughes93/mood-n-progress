class Api::V1::UsersController < ApplicationController
    def index
        @users = User.all
        render json: @users
    end
    def show
        @user = User.find(params[:id])
        render json: @user
    end
    def login
        @user = User.find_by(username: params[:username])
        render json: @user
    end
    def create
        # user = User.new(user_params)
        # if user.save
        #     render json: users
        # else
        #     render plain: "There was an issue. Add Errors later"
        # end
        @user = User.create(user_params)
        render json: @user
    end
    def update
        # user = User.find(user_params)
        # if user.update
        #     render json: users
        # else
        #     render plain: "There was an issue. Add Errors later"
        # end
        @user = User.find(params[:id])
        @user.update(user_params)
        render json: @user
    end
    def destroy
         # user = User.find(user_params)
        # if user.delete
        #     render json: {userId: user.id}
        # else
        #     render plain: "There was an issue. Add Errors later"
        # end
        @user = User.find(params[:id])
        @user.delete
        render json: {userId: @user.id}
    end
    private
    def user_params
        params.require(:user).permit(:name,:username, note:[:title,:content])
    end
end
