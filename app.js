const booksObjectArray = [];
const gettingBooksFromLocal = JSON.parse(localStorage.getItem('localStorageBooks'));
const allBooks = document.querySelector('.all-books-container');

class BookClass {
  constructor(id, bookTitle, author) {
    this.id = id;
    this.bookName = bookTitle;
    this.bookAuthor = author;
  }
}

if (gettingBooksFromLocal !== null) {
  gettingBooksFromLocal.forEach((element) => {
    allBooks.innerHTML += `
    <div class="particular-book" id="${element.id}">
      <p class="book-title-and-author">"${element.bookName}" by ${element.bookAuthor}</p>
      <button class="remove-book" onclick="removeBook(${element.id})">Remove</button>
    </div>
    `;
    const singleBook = new BookClass(element.id, element.bookName, element.bookAuthor);
    booksObjectArray.push(singleBook);
  });
}

const inputBook = document.querySelector('.input-book-name');
const inputAuthor = document.querySelector('.input-book-author');
const addBtn = document.querySelector('.add-button');

function addBook() {
  const singleBook = new BookClass(booksObjectArray.length, inputBook.value, inputAuthor.value);
  booksObjectArray.push(singleBook);
  localStorage.setItem('localStorageBooks', JSON.stringify(booksObjectArray));
}

addBtn.addEventListener('click', addBook);

// eslint-disable-next-line no-unused-vars
function removeBook(bookId) {
  const res = booksObjectArray.filter((every) => every.id !== bookId);
  for (let i = 0; i < res.length; i += 1) {
    res[i].id = i;
  }
  localStorage.setItem('localStorageBooks', JSON.stringify(res));
  window.location.reload();
}