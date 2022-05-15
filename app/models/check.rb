class Check < ApplicationRecord

  has_one_attached :image
  # ↑このとき、checksテーブルにカラムを追加する必要はありません。

  
  belongs_to :student
  


   
end
