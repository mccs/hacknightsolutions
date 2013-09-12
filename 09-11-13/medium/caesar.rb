# Naive attempt at a simple Caesar Cipher
# as defined in the Hack Night at MCCS 9/11/13
# Usage:
#     ruby caesar.rb "your string" 2

def caeser_cipher(str, num)
	# Coerce the number to an integer
	num = num.to_i
	# Uppercase the whole string
	str = str.upcase
	# Declare a new string to be returned
	shifted_string = ""
	str.each_byte { |letter|
		if (letter == 32)
			shifted_string += " "
		else
			shifted_string += shift_char(letter, num)
		end
	}
	return shifted_string
end

def shift_char(char, shift_amount)
	(((char.to_i - 65 + shift_amount) % 26) + 65).chr
end

puts caeser_cipher(ARGV[0], ARGV[1])
