//Select DOM
const bookGrid = document.querySelector('.book-grid');
const form = document.querySelector('.formContainer');

let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let book = myLibrary.push(new Book(
      title.value, 
      author.value, 
      pages.value,
      document.querySelector('input[name="read"]:checked').value
    ));
    closeTheForm()
    displayBooks();
    form.reset();
  })
}
addBookToLibrary();

function displayBooks(){
  bookGrid.innerHTML = ''
  for (let i = 0; i < myLibrary.length; i++){
    createBookCard(myLibrary[i]);
  }
}

function createBookCard(book){

  const element = document.createElement('div');
  element.className = 'bookCard';

  const title = document.createElement('h2');
  title.className = 'title';
  title.textContent = book.title;
  element.appendChild(title);

  const author = document.createElement('h3');
  author.className = 'author';
  author.textContent = book.author;
  element.appendChild(author);

  const pages = document.createElement('h3');
  pages.className = 'pages';
  pages.textContent = `${book.pages} pages`;
  element.appendChild(pages);

  const readStatus = document.createElement('h3');
  readStatus.className = 'readStatus';
  readStatus.textContent = document.querySelector('input[name="read"]:checked').value;
  element.appendChild(readStatus);

  bookGrid.appendChild(element);
}

function openTheForm() {
  document.getElementById("popupForm").style.display = "block";
}

function closeTheForm() {
  document.getElementById("popupForm").style.display = "none";
}