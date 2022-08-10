// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
let countBits = function(n) {
    let s = 0;
    while (n > 0){
      s += n % 2
      n = Math.floor(n/2)
   }
   return s
 };
 
 console.log(countBits(0))
 console.log(countBits(2))
 console.log(countBits(3))
 console.log(countBits(1234))