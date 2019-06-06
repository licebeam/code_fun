
var colors = require('colors')

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const textArr = [
  `Hack The Planet!`,
  'Time.. To.. Die..',
  'Ah ah ah, you didn\'t say the magic word',
  'Hold on to ya butts.',
  'You gotta stop lettin ya momma dress you!',
  'Hasta la vista baby',
  'She\'s not my mother toddddd!',
  'Stay out!',
  'You have been expunged.',
  'Mess with the best die like the rest.',
]
const colorName = (text) => {
  console.log(colors.rainbow(textArr[getRandomInt(textArr.length)]));
}

colorName(textArr); 