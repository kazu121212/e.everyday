class ChecksController < ApplicationController
  def index
    @students = Student.all
    @teachers = Teacher.all
  end
end
