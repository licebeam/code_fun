class MyClass {
  constructor() {
    this.name = 'name boys';
    this.obj = { name: 'test name object', num: 100 }
  }
  render() {
    return console.log('test' + this.name)
  }
}




const test = new MyClass;
const butt = new MyClass;

console.log(butt.obj.name)
test.render();


function MyApp() {
  return console.log('hey')
}

MyApp()