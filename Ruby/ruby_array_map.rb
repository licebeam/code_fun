def map_array(arr)
  new_items = []
  arr.map {|item| new_items << item}
  new_items
end

test_array = ['hey', 'you', 'smell']
test_map =  map_array(test_array)

puts test_map