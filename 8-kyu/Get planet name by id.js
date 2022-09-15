// The function is not returning the correct values. Can you figure out why?

// Example (Input --> Output ):

// 3 --> "Earth"

1
function getPlanetName(id){
2
  var name;
3
  switch(id){
4
    case 1:
5
      name = 'Mercury'
6
      break;
7
    case 2:
8
      name = 'Venus'
9
      break;
10
    case 3:
11
      name = 'Earth'
12
      break;
13
    case 4:
14
      name = 'Mars'
15
      break;
16
    case 5:
17
      name = 'Jupiter'
18
      break;
19
    case 6:
20
      name = 'Saturn'
21
      break;
22
    case 7:
23
      name = 'Uranus'
24
      break;
25
    case 8:
26
      name = 'Neptune'
27
      break;
28
  }
29
  
30
  return name;
31
}
