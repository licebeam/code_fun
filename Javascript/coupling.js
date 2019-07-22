const sayName = (name) => {
  console.log(name.slice(0, 10))
  return name
}

const changeName = (text) => {
  const coolName = sayName(text);
  console.log(coolName)
}

changeName('10');