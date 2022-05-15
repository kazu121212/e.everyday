5.times do |n|
  User.create!(
    email: "test#{n + 1}@test.com",
    name: "テスト太郎#{n + 1}",
    encrypted_password: "guest#{n+1}0000",
    first_name: "テスト太郎#{n + 1}",
    last_name: "テスト太郎#{n + 1}",
    last_name_kana: "テスト太郎#{n + 1}",
    first_name_kana: "テスト太郎#{n + 1}",
    birth_date: "テスト太郎#{n + 1}",
    
  )
end