var character = {
  name: 'hero',
  hp: 1,
  attack: 1,
  id: 1,
}

var monster = {
  name: 'monster',
  hp: 1, 
  attack: 1,
  id: 2, 
}


const battle = (hero, monster) => {
  console.log(`Beginning battle between: ${hero.name} and ${monster.name}`)
  const firstAttack = Math.random() * (monster.id - hero.id) + hero.id;
  console.log(Math.round(firstAttack))
  if (Math.round(firstAttack) === 1) {
    //hero attacks first
    return console.log('Hero Wins')
  }
  return console.log('Monster Wins')
}

battle(character, monster);