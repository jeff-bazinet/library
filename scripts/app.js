const myLibrary = [];

function Book(
  title,
  author,
  pages,
  publicationDate,
  publisher,
  isbn10,
  isbn13,
  language,
  readStatus,
  thumbnail
) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.publicationDate = publicationDate;
  this.publisher = publisher;
  this.isbn10 = isbn10;
  this.isbn13 = isbn13;
  this.language = language;
  this.readStatus = readStatus;
  this.thumbnail = thumbnail;
}

function addBookToLibrary(
  title,
  author,
  pages,
  publicationDate,
  publisher,
  isbn10,
  isbn13,
  language,
  readStatus,
  thumbnail
) {
  const newBook = new Book(
    title,
    author,
    pages,
    publicationDate,
    publisher,
    isbn10,
    isbn13,
    language,
    readStatus,
    thumbnail
  );
  myLibrary.push(newBook);
}

function displayLibraryBooks() {
  const mainGrid = document.querySelector('.book-grid');

  myLibrary.forEach((book) => {
    const newBook = document.createElement('div');
    const newBookDetails = document.createElement('div');
    const newBookThumbnail = document.createElement('div');

    newBook.classList.add('book');
    newBookDetails.classList.add('book-details');
    newBookThumbnail.classList.add('book-thumbnail');

    const bookDetails = [
      { label: 'Title: ', value: book.title },
      { label: 'Author: ', value: book.author },
      { label: 'Pages: ', value: book.pages },
      { label: 'Publication Date: ', value: book.publicationDate },
      { label: 'Publisher: ', value: book.publisher },
      { label: 'ISBN-10: ', value: book.isbn10 },
      { label: 'ISBN-13: ', value: book.isbn13 },
      { label: 'Language: ', value: book.language },
      { label: 'Have Read: ', value: book.readStatus },
    ];

    bookDetails.forEach((detail) => {
      const detailElement = document.createElement('p');
      const detailElementLabel = document.createElement('span');

      detailElementLabel.classList.add('book-label');
      detailElementLabel.innerText = detail.label;
      detailElement.appendChild(detailElementLabel);

      const detailElementValue = document.createTextNode(detail.value);
      detailElement.appendChild(detailElementValue)

      console.log(detailElement.innerText)
      newBookDetails.appendChild(detailElement);
    });

    const bookThumbnail = document.createElement('img');
    bookThumbnail.src = book.thumbnail;
    newBookThumbnail.appendChild(bookThumbnail);

    newBook.appendChild(newBookDetails);
    newBook.appendChild(newBookThumbnail);
    mainGrid.appendChild(newBook);
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
  false,
  'images/pride-and-prejudice.jpg'
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
