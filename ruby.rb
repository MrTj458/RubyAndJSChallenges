def draw_slant(height)
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
  string = string.gsub(/\s+/, '') if !keep_spaces
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

def array_filled(amount, value)
  array = []

  amount.times do |i|
    array << value
  end

  array
end

def swap(array, index1, index2)
  new_array = array
  temp = new_array[index1]
  new_array[index1] = new_array[index2]
  new_array[index2] = temp
  new_array
end