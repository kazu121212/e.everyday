class ChecksController < ApplicationController
  def index
    @students = Student.all
    @teachers = Teacher.all
  
   
   
   
 
  end

  

  
  
  def create
    
    # check = Check.create(check_params)

    @check = Check.new(check_params)

    
      if @check.save
       
        SampleMailer.send_when_check(@check).deliver
       
       
       
     
        
      end
     
     
    

    
    render json:{ check: @check }
    
  end

  private
  def check_params
    params.permit(:check_in_time, :check_out_time, :student_id, :image)


  end
end
