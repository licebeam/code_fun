const concatString = (str1, str2) => {
  console.log(str1.concat(' ', str2));
}

const sliceString = str => {
  console.log(str.slice(0, 10));
}

const padString = str => {
  console.log(str.padEnd(7, '.'))
}


var myTemp = 'this is also a string but a variable';

concatString('hello', 'world');
sliceString('hey whats up my name is dusty, what is your name?');
padString('hmmm');

console.log(`I'm a string ${concatString('return', 'this')}`)

var myCss = `${`${myTemp}`, '2px solid #fff'}`