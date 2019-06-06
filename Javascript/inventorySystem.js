// Inventory would be a piece of redux/react state;
let inventory = ['Inventory']; //array of objects
const sword = { id: 1, name: 'sword', amount: 1 };

removeItem = (itemId) => {
  const revisedInventory = inventory.find(item => item.id !== itemId);
  inventory = revisedInventory;
  showInventory();
}

addItem = (itemObject) => {
  const revisedInventory = inventory.some(item => item.id === itemObject.id);
  if (!revisedInventory){
    inventory.push(itemObject) 
  } else if (revisedInventory) {
    console.log('array')
    inventory = inventory.map(item => {
      item.id === itemObject.id ? item.amount += 1 : null;
    })
  }
  showInventory();
  // removeItem(sword.id)
}

showInventory = () => {
  console.log(inventory);
}

addItem(sword)
addItem(sword)