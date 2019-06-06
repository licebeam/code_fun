const buttholes = ['harry','smelly','greasy','sweaty','harry','stinky','sweaty'];
const numbers = [1,2,3,4,5,6,7,8,9,10];

const sniffer = buttholes.reduce((total,amount) => total + "-" +  amount);
const tallyer = buttholes.reduce((t,item) => {
 t[item] = (t[item] || 0 ) + 1; 
 return t; 
}, {} );

const sum = numbers.reduce((total,i) => {
   return total + i;
});

//important
const d1 = numbers.reduce((myObj, number, ci, ar) => {
   myObj[number] = "peeners"
   return myObj; 
}, {})


console.log(JSON.stringify(d1));