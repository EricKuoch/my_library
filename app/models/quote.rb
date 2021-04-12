class Quote < ApplicationRecord
  belongs_to :library_book
  validates :description, presence: true
end
