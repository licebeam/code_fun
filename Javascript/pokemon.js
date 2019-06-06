const readline = require('readline');

const writer = (text) => {
  console.log('\x1b[36m%s\x1b[0m', text)
}

const player = [
  {
    name: 'test'
  }
];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const start = (e) => { //event chain
  switch (e) {
    case 'intro':
      writer('Good Morning!', player.name)
      writer('Welcome to Pokemon.js', player.name)
      rl.question('What is your name? ', (answer) => {
        console.log('\x1b[32m', `${answer}! Wow, what a cool name!`);
        start('select');
      });
      break;
    case 'select':
      writer('Please select your Monster!', player.name)
      writer('There are two to choose from, which would you like?', player.name)
      rl.question('Dragon or Cat', (answer) => {
        answer === 'yes' ? console.log('Woah!') : console.log('hmm')
        battle("intro");
      });
      break;
    default:
      break;
  }
}

const battle = (e) => { //event chain
  switch (e) {
    case 'intro':
      writer('You see a monster!', player.name)
      rl.question('Fight or Run? ', (answer) => {
        answer === 'Fight' ? console.log("Let's battle!") : console.log('I gotta get out of here!')
        battle('action')
      });
      break;
    case 'action':
      writer('Choose your action.', player.name)
      rl.question('Attack or Defend? ', (answer) => {
        answer === 'Attack' ? console.log('Hit!') : console.log('hmm')
        rl.close();
      });
      break;
    default:
      break;
  }
}
start('intro');

//react / mobx / firebase / pokemon battle system /
// data structures,   users > email / stats / monsters etc. / ranking
// monster data structure // 
// monster name, type, stats, etc. 


// react dictates the battle
// firebase will handle serverside actions as text commands.
// need to be scrubbed with a hash to insure they are associated with a specific account
// players will never know their hash/ potential security / cheating issues? 

//combat should be somewhat skill based perhaps like a card game?
//every time you level up you can replace a card in your deck? 

//card monsters? 

//each monster type can only draw from specific pools.

