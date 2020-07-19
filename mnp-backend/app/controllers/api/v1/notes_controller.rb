class Api::V1::NotesController < ApplicationController
    
    
    def index
        @notes = Note.all
        render json: @notes
    end

    def show
        @note = Note.find(params[:id])
        render json: @note, status: 200
    end

    def create
        # note = note.new(note_params)
        # if note.save
        #     render json: notes, status: 200
        # else
        #     render plain: "There was an issue. Add Errors later"
        # end
        @note = Note.create(note_params)
        
        # binding.pry
        render json: @note, status: 200
    end

    def update
        # note = note.find(note_params)
        # if note.update
        #     render json: notes, status: 200
        # else
        #     render plain: "There was an issue. Add Errors later"
        # end
        @note = Note.find(params[:id])
        @note.update(note_params)
        render json: @note, status: 200
    end

    def destroy
         # note = note.find(note_params)
        # if note.delete
        #     render json: {noteId: note.id}
        # else
        #     render plain: "There was an issue. Add Errors later"
        # end
        @note = Note.find(params[:id])
        @note.delete
        render json: {noteId: @note.id}
    end

private

    def set_user
        @user = User.find(params[:user_id])
    end

    def set_note
        @note = @user.notes.find(params[:id])
    end

    def note_params
        params.require(:note).permit(:title,:content, :user_id)
    end

end
