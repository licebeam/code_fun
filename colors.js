
var colors = require('colors')

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const textArr = [
  `Hack The Planet!`,
  'Time.. Too.. Die..',
  'Ah ah ah, you didn\'t say the magic word',
  'Hold on to ya butts.',
  'You gotta stop lettin ya momma dress you!',
  'Hasta la vista baby',
  'She\'s not my mother toddddd!',
]
const colorName = (text) => {
  console.log(colors.rainbow(textArr[getRandomInt(textArr.length)]));
}

colorName(textArr); 