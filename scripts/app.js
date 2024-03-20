const myLibrary = [];

function Book(
  author,
  title,
  pages,
  publicationDate,
  publisher,
  isbn10,
  isbn13,
  language,
  readStatus
) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.publicationDate = publicationDate;
  this.publisher = publisher;
  this.isbn10 = isbn10;
  this.isbn13 = isbn13;
  this.language = language;
  this.readStatus = readStatus;
}

function addBookToLibrary(
  author,
  title,
  pages,
  publicationDate,
  publisher,
  isbn10,
  isbn13,
  language,
  readStatus
) {
  const newBook = new Book(
    author,
    title,
    pages,
    publicationDate,
    publisher,
    isbn10,
    isbn13,
    language,
    readStatus
  );
  myLibrary.push(newBook);
}

function displayLibraryBooks() {
  myLibrary.forEach((book) => {
    console.log(book);
  });
}

addBookToLibrary(
  'Pride and Prejudice',
  'Jane Austen',
  '448',
  '12/31/2002',
  'Penguin Books',
  '9780141439518',
  '978-0141439518',
  'en',
  false
);

addBookToLibrary(
  '1984',
  'George Orwell',
  '328',
  '1/1/1961',
  'Signet Classic',
  '9780451524935',
  '978-0451524935',
  'en',
  false
);

addBookToLibrary(
  'Don Quixote',
  'Miguel De Cervantes Saavedra',
  '1072',
  '2/25/2003',
  'Penguin Books',
  '0142437239',
  '978-0142437230',
  'en',
  false
);

displayLibraryBooks();