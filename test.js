const player = {
  hp: 10,
  atk: 3,
  def: 5,
}
const baddy = {
  hp: 20,
  atk: 2,
  def: 1,
}

const fight = (player, baddy) => {
  let pdmg = player.atk - baddy.def;
  console.log(pdmg)
  let resolved = baddy.hp - pdmg;
  console.log(resolved)
}

fight(player, baddy)