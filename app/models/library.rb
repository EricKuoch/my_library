class Library < ApplicationRecord
  belongs_to :user
  has_many :library_books
end
