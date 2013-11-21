function FunWithFactorials() {
	// Calculates the factorial of a number with memoization
	this.f = [];
	this.factorial = function(n) {
		if (n == 0 || n == 1) {
			return 1;
		}
		if (this.f[n] > 0) {
			return this.f[n];
		} else {
			return this.f[n] = this.factorial(n-1) * n;
		}
	};

	/*
	145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.
	Find the sum of all numbers which are equal to the sum of the factorial of their digits.
	Note: as 1! = 1 and 2! = 2 are not sums they are not included.
	*/
	this.digitFactorials = function() {
		var sum = 0,
			limitReached = false;

		// The upper bound for this problem is 9! * 7 which is 2540160
		for (var i = 0; i < 2540160; i++) {
			if (i.toString().length > 1) {
				var currentSum = 0;
				for (var j = 0; j < i.toString().length; j++) {
					currentSum = (currentSum + this.factorial(i.toString().charAt(j)));
				}
				if (currentSum == i) {
					sum += currentSum;
				}
			}
		}
		return sum;
	};
}

// The fun test case, you can run this in your browser's console
var f = new FunWithFactorials();
console.log("The sum of all numbers which are equal to the sum of the factorial of their digits is " +
	f.digitFactorials());
