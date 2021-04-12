require 'faker'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user_seed = User.create(
  email: "seed@gmail.com",
  password: "123456"
)
p "#{user_seed.email}"
user_seed.library_books.destroy_all
5.times do
  lib_book = LibraryBook.create(
    author: Faker::Name.name,
    title: Faker::Book.title,
    description: Faker::Books::CultureSeries.book,
    status:'bought',
    user_id: User.last.id,
    image: "https://images.unsplash.com/photo-1551300316-cc6ced5bbe27?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
  )
  p "#{lib_book.title} created ! "
end

user_seed.quotes.destroy_all
5.times do
  quote1 = Quote.create(
    library_book_id: LibraryBook.last.id,
    description: Faker::Quote.yoda,
    chapter: 3,
    pages: 10,
    user_id: User.last.id
  )
  p "group 1 quotes created ! "
end

2.times do
  Quote.create(
    library_book_id: LibraryBook.last(2).first.id,
    description: Faker::Quote.yoda,
    chapter: 3,
    pages: 10,
    user_id: User.last.id,
    created_at: 9.day.ago
  )
  p "group 2 quotes created ! "
end

7.times do
  Quote.create(
    library_book_id: LibraryBook.last(3).first.id,
    description: Faker::Quote.yoda,
    chapter: 3,
    pages: 10,
    user_id: User.last.id,
    created_at: 2.day.ago
  )
  p "group 3 quotes created ! "
end