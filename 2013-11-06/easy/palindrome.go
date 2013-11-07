package main

import "fmt"

func isPalindrome(str string) bool {
	for i := len(str) - 1; i >= 0; i-- {
		if string(str[i]) != string(str[(len(str)-1)-i]) {
			return false
		}
	}
	return true
}

func main() {
	var input string
	fmt.Print("Please enter a string for me to determine its palindromeosity: ")
	fmt.Scanf("%s", &input)
	fmt.Print(isPalindrome(input))
	fmt.Print("\n")
}
