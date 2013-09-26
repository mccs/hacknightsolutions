import math

MIN = 2
MAX = 100

# We use a set to not worry about duplicates
nums = set([])

# O(n^2)
# range works such as MIN <= x < MAX, so we use MAX + 1
for a in range(MIN, MAX + 1):
    for b in range(MIN, MAX + 1):
        nums.add(math.pow(a, b)) 

print(len(nums))
