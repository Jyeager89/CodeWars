// //Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// //Return your answer as a number.

 function sumMix(x){
    const initialValue = 0;
  const sumWithInitial = x.reduce(       (previousValue, currentValue) => Number(previousValue) + Number(currentValue),
      initialValue
     );
      return sumWithInitial
    }