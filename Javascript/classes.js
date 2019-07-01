class MyClass {
  constructor() {
    this.name = 'name boys';
    this.obj = { name: 'test name object', num: 100 }
  }
  render() {
    return console.log('test' + this.name)
  }
}


function ClassBoyz() {
  this.poop = 'hey';
  this.checkNum = () => {

  }
}

const checkit = new ClassBoyz;

console.log(checkit.checkNum())




const test = new MyClass;
const butt = new MyClass;

console.log(butt.obj.name)
test.render();


function MyApp() {
  return console.log('hey')
}

MyApp()