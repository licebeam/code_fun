
const checkPossibilities = (message) => {
  switch (message) {
    case 'test':
      console.log('test message')
      console.log('test message')
      console.log('test message')
      console.log('test message')
      console.log('test message')
      break
    case 'flex':
      return console.log('flex-message')
    default:
      return console.log('no argument')
  }
}

checkPossibilities('test')


// const checkAllPossibilities = (num) => {
//   if (num >= 1) {
//     console.log('im atleast 1')

//     if (num < 4) {
//       console.log('im less than 4 as well')
//     }

//     else if (num > 4) {
//       return console.log('false value')
//     }

//   } else if (num < 1) {
//     return console.log('false value')
//   }
// }

// checkAllPossibilities(5)