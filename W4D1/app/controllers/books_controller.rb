class BooksController < ApplicationController
  def index
    @books = Book.all
  end

  def new
    render :new
  end

  def create
    book = Book.new(book_params)
    if book.save #ApplicationRecord save to database
      redirect_to books_url
    else
      flash.now[:errors] = book.errors.full_messages
      render :new
    end
end
  end

  def destroy
    book = Book.find_by(id: params[:id])
    book.destroy #Application Record destroy will delete from database
    redirect_to books_url
  end

  private
  def book_params
    params.require(:book).permit(:title, :author)
  end
end