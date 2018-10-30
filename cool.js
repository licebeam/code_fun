const readline = require('readline');
const writer = (text) => {
  console.log('\x1b[36m%s\x1b[0m', text)
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const books = [
  { id: 1, text: 'I am a book', title: 'Salems Lot' },
  { id: 2, text: 'I am a book', title: 'It' }]

const checkOut = (book) => {
  //take book
  writer(`You've checked out ${book}, maybe you should read it.`)
}

const checkShelf = (bookArray) => {
  //look for books
  writer('You look deeply at the books');
  bookArray.map(book => {
    return writer(`you see ${book.title}`)
  }  
  );
  rl.question('What book do you want to check out?', (answer) => {
    console.log(`${answer}! Nice book choice`);
    checkOut(answer)
  });
}

const readBook = (book) => {
  //reads a book
}

checkShelf(books);