class Notification < ApplicationRecord

  default_scope -> { order(created_at: :desc) }
  belongs_to :check
  belongs_to :user
  belongs_to :student
end
