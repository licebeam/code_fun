let inventory = []

createWeapon = (name, type) => {
  const weaponItem = { name: name, type: type }
  return weaponItem;
}

addItemInventory = (name, type) => {
  const item = createWeapon(name, type)
  console.log("Added", item)
  inventory.push(item)
}

removeItemInventory = (name) => {
  newInventory = inventory.filter(n => n.name !== name)
  inventory = newInventory
  console.log("Removed " + name + " from inventory", inventory);
}

showInventory = (i) => {
  addItemInventory('steel', 'boy');
  addItemInventory('green', 'boy');
  addItemInventory('gold', 'boy');
  removeItemInventory('steel');
  removeItemInventory('green');
}

showInventory(inventory)