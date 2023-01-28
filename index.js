let home = document.getElementById('home')
let away = document.getElementById('away')

let homeScore = 0
let awayScore = 0

const addOneHome = () => {
  console.log('Pressed +1 Home')
  homeScore += 1
  home.innerText = homeScore
}

const addTwoHome = () => {
  console.log('Pressed +2 Home')
  homeScore += 2
  home.innerText = homeScore
}
const addThreeHome = () => {
  console.log('Pressed +3 Home')
  homeScore += 3
  home.innerText = homeScore
}

const addOneAway = () => {
  console.log('Pressed +1 Away')
  awayScore += 1
  away.innerText = awayScore
}

const addTwoAway = () => {
  console.log('Pressed +2 Away')
  awayScore += 2
  away.innerText = awayScore
}

const addThreeAway = () => {
  console.log('Pressed +3 Away')
  awayScore += 3
  away.innerText = awayScore
}

const newGame = () => {
  homeScore = 0
  awayScore = 0
  home.innerText = homeScore
  away.innerText = awayScore
}
