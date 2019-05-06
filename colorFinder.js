color2dArray = [[2, 2, 2], [2, 1, 2], [2, 2, 1], [1, 1, 2]]

let items = []
color2dArray.map((cArr, i) => {
  cArr.map((c, index) => {
    if (c === 2 && cArr[index + 1] === 2 || c === 2 && color2dArray[i > 1 ? i - 1 : 0][index] === 2)
      items.push(c)
  })
})
console.log(items.length)
