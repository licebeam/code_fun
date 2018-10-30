const readline = require('readline');
const writer = (text) => {
  console.log('\x1b[36m%s\x1b[0m', text)
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const books = [{ id: 1, text: 'I am a book', title: 'Salems Lot' }]

const checkOut = (book) => {
  //take book
}

const checkShelf = (books) => {
  //look for books
  writer('You look deeply at the books');
  rl.question('What book do you want to check out?', (answer) => {
    console.log(`${answer}! Nice book choice`);
  });
}

const readBook = (book) => {
  //reads a book
}

checkShelf(books);