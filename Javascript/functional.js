const test = () => {
    console.log("hello");
}

const check = (name) => {
    const myar = ['time','to','die', name];
    console.log(myar.join(', '));
    test();
}

check('dustin');


const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  let squaredIntegers = arr.filter((num) => {
      let time = num; 
      if(time >= 0 && Math.floor(time) === time){
       return time; 
      }
  }); 
  squaredIntegers[0] = squaredIntegers[0] * squaredIntegers[0] ;
  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);




const sum = (function(...args) {
    return function sum(...args) {
      
      return args.reduce((a, b) => a + b, 0);
    };
  })();
  console.log(sum(1, 2, 3)); // 6