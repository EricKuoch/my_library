class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_one :library
  has_many :library_books
  has_many :quotes
  after_save :add_library

  def add_library
    Library.create(name: "Name", user_id:id)
  end
end
