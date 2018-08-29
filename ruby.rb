require 'pry'

def draw_tree(height)
  height.times do |i|
    (i + 1).times do |j|
      print '*'
    end
    puts
  end
end

def string_to_word_array(string)
  string.split(' ')
end

def string_to_char_array(string, keep_spaces = false)
  string = string.gsub(/\s+/, "") if !keep_spaces
  string = string.split('')
end

def case_swap(string)
  string_array = string.split('')

  string_array.each_index do |i|
    if string_array[i].capitalize == string_array[i]
      string_array[i].downcase!
    else
      string_array[i].upcase!
    end
  end
  
  string_array.join()
end

def array_filled(num, value)
  array = []

  num.times do |i|
    array << value
  end

  array
end

x = array_filled(10, 5)
binding.pry