class LibraryBook < ApplicationRecord
  belongs_to :library
  has_many :quotes
  accepts_nested_attributes_for :quotes
  enum status: { bought: 0, reading: 1, finished: 2}

  scope :reading, -> { where(status: "reading") }
  scope :bought, -> { where(status: "bought") }
  scope :finished, -> { where(status: "finished") }
end
