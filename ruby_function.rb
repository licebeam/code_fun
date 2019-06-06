def add_two(number)
  number + 2
end

puts add_two(3)

puts 'test'

# testing inspect

puts 'A String'

puts [ 1, 2, 3].inspect


# testing variables

name = 'dustman'

puts name

# testing symbols

test = :my_symbol
puts test

# testing arrays

words = ['test', 'second', 'third']
words << 'mega test'
puts words[3]