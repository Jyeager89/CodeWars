// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, when the input is green, output should be yellow.

function updateLight(current) {
    let lights ={
      "green":1
      ,"yellow":2,
      "red":3
  }
   let result = Object.entries(lights)
  let number = ((lights[current])+ 1) % 4
  if(number == 0){
    return "green"
  }
  let light = result.filter((x,i)=> x[1] == number? x[0] : false ).join("").split(",")[0]
  return light
  }