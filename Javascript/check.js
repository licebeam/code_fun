const dataArr = ['1-400-date', '2-300-date']

dataArr[0].slice('-')

//splits string at charater
console.log(dataArr[0].split('-'))
const stringArr = dataArr[0].split('-')
//re-arranges the new string
const newString = stringArr[0] + '-' + stringArr[2] + '/' + stringArr[1];
console.log(newString)