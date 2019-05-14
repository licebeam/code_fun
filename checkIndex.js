const myArray = ['cool', 'dude', 'dustin', 'kim'];

function showIndex(arr) {
  arr.map((item, itemIndex) => console.log(item, itemIndex))
}

showIndex(myArray);