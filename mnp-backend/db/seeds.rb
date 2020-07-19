# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Note.destroy_all

users = []

10.times do
    User.create do |u|
        u.name = Faker::GreekPhilosophers.name
        u.username = Faker::Internet.unique.username
        users << u
    end
end

10.times do
    Note.create do |n|
        n.title = Faker::TvShows::VentureBros.quote
        n.content = Faker::GreekPhilosophers.quote
        n.user = users.sample
    end
end

test = User.create(name: "Cho", username: "test" )

Note.create(title: "This better work", content: "This was made to be played with.", user: test)