package main

import "os"
import "strconv"
import "fmt"

func isPrime(n int) bool {
	// definition
	if n == 1 {
		return false
	}

	for i := n - 1; i > 1; i-- {
		if n%i == 0 {
			return false
		}
	}
	return true
}

func listSexy(n int) [][]int {
	var results [][]int

	for i := 0; i <= n; i++ {
		m := i + 6
		if isPrime(m) && isPrime(i) {
			results = append(results, []int{i, m})
		}
	}

	return results
}

func main() {
	var n int
	var _ error

	n, _ = strconv.Atoi(os.Args[1])

	fmt.Print(listSexy(n))
	fmt.Print("\n")
}
