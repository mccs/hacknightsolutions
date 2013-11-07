(defn palindrome?
        [word]
        (=  (seq word) (reverse word)))


(palindrome? "racecar")
(palindrome? "poop")
(palindrome? "asdf") ; to prove that it doesn't just return true.

