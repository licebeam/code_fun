const badwords = ['cool', 'test'];

// findBadWord = (word) => {
//   const badword = badwords.find(bw => bw === word);
//   if (badword) {
//     console.log(badword)
//     return false;
//   }
//   console.log(badword)
//   return true;
// }

// console.log(findBadWord('test'))

// checkGoodWord = (word) => {
//   const badword = !badwords.find(bw => bw === word);
//   if (badword) {
//     console.log(badword + ' Not a bad word.')
//     return false;
//   }
//   console.log(badword)
//   return true;
// }


findBadWord = (word) => !!badwords.find(bw => bw === word);

console.log(findBadWord('adsda'))