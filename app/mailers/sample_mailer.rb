class SampleMailer < ApplicationMailer
  
  def send_when_check(check)
    
    
    @check = check
    mail to:      @check.student.user.email,
  
    
         subject: 'e.everydayに到着しております。'
        
  end
end
