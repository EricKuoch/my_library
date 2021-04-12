class LibraryBook < ApplicationRecord
  has_many :quotes, dependent: :destroy
  belongs_to :user
  accepts_nested_attributes_for :quotes
  enum status: { bought: 0, reading: 1, finished: 2}

  validates :title, presence: true
  validates :description, presence: true
  validates :author, presence: true
  validates :status, presence: true

  scope :reading, -> { where(status: "reading") }
  scope :bought, -> { where(status: "bought") }
  scope :finished, -> { where(status: "finished") }
end
