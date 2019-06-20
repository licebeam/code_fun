// Example of how return works for a friend.

let changingNumber = 9;


//early returns
const checkIfNumberIs10 = (testNum) => {
  let num = testNum * 10 / 10 - 2 + 3
  if (num > 10 && num < 1000) {
    return `hey the number is too big ${num}`
  }
  if (num < 10) {
    return `hey the number is too small ${num}`
  }
  if (num === 10) {
    return `hey the number is 10 ${num}`
  }
  return `hey the number is wayyyyyyyyyyyyyyy too big ${num}`
}

console.log(checkIfNumberIs10(changingNumber))
