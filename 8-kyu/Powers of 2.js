// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

function powersOfTwo(n){
    // create empty array name it powers
    let powers = []
    // create a for loop to iterate through the exponent of i
    for (i=0; i <=n; i++){
      let answer = 2**i
      powers.push(answer)
    }
    return powers
  }