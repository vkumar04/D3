var linearScale = d3.scaleLinear()
.domain([0,100])
.range([0,1])
.clamp(true)

console.log(linearScale(0))
console.log(linearScale(0.5))
console.log(linearScale(1))

console.log(linearScale(1))

// scale time from 1st to current date of 2017
var timeScale = d3.scaleTime()
.domain([new Date(2017, 0 ,1), new Date()])
.range([0, 100])

console.log(timeScale(new Date(2017, 6, 1)))
console.log(timeScale.invert(50))

// scale quantize
var quantizeScale = d3.scaleQuantize()
.domain([0,100])
.range(['red', 'green'])

console.log(quantizeScale(22))
console.log(quantizeScale(50))
console.log(quantizeScale(65))
console.log(quantizeScale(99))

console.log(quantizeScale.invertExtent('green'))

// ordinal scale
var ordinalScale = d3.scaleOrdinal()
.domain(['poor', 'good', 'great'])
.range(['red', 'white', 'green'])

// get external json data
d3.json('./data/data.json', (data) => {
  console.log(data);
})