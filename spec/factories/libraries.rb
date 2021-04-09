FactoryBot.define do
  factory :library do
    user_id { User.first }
    name {"library_test"}
    
  end
end
