class DiariesController < ApplicationController
  before_action :set_diary, only: %i[ show update destroy ]
  before_action :authorized

  # GET /diaries
  def index
    @diaries = Diary.where user: @user.id

    render json: @diaries
  end

  # GET /diaries/1
  def show
    render json: @diary
  end

  # POST /diaries
  def create
    @diary = Diary.new(diary_params)
    @diary.user = @user

    if @diary.save
      render json: @diary, status: :created, location: @diary
    else
      render json: @diary.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /diaries/1
  def update
    if @diary.update(diary_params)
      render json: @diary
    else
      render json: @diary.errors, status: :unprocessable_entity
    end
  end

  # DELETE /diaries/1
  def destroy
    @diary.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_diary
      @diary = Diary.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def diary_params
      params.require(:diary).permit(:title, :body, :user_id)
    end
end
