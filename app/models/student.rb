class Student < ApplicationRecord

  belongs_to :user
  has_many :checks

end
