//Select DOM
const bookGrid = document.querySelector('.book-grid');
const form = document.querySelector('.formContainer');
let checkboxForm = document.getElementById('read');

//Create empty library array
let myLibrary = [];

//Object constructor
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    myLibrary.unshift(new Book(
      title.value, 
      author.value, 
      pages.value,
      checkboxForm.checked
    ));
    closeTheForm()
    displayBooks();
    form.reset();
  })
}
addBookToLibrary();

function displayBooks(){
  bookGrid.innerHTML = '';
  for (let i = 0; i < myLibrary.length; i++){
    createBookCard(myLibrary[i]);
  }
}

function createBookCard(book){

  const element = document.createElement('div');
  element.classList.add('bookCard', 'bookCard');

  const removeCard = document.createElement('button');
  removeCard.classList.add('btn', 'btnRemove');
  element.appendChild(removeCard);
  const closeIcon = document.createElement('span');
  closeIcon.classList.add('material-symbols-outlined');
  closeIcon.textContent = 'close';
  removeCard.appendChild(closeIcon);

  
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

  const readStatusBox = document.createElement('div');
  readStatusBox.className = 'readStatusBox';
  const readStatus = document.createElement('input');
  readStatus.setAttribute('id', 'readDisplay');
  readStatus.setAttribute('type', 'checkbox');
  readStatus.checked = book.read;

  const readLabel = document.createElement('label');
  readLabel.setAttribute('for', 'readDisplay');
  readLabel.textContent = 'Finished reading';
  
  element.appendChild(readStatusBox);
  readStatusBox.appendChild(readStatus);
  readStatusBox.appendChild(readLabel);

  bookGrid.appendChild(element);

  removeCard.addEventListener('click', function () { 
    let index = myLibrary.indexOf(book);
    myLibrary.splice(index,1); 
    element.remove();
    displayEmpty();
    console.log(myLibrary);
  });
}

function openTheForm() {
  document.getElementById("popupForm").style.display = "block";
}

function closeTheForm() {
  document.getElementById("popupForm").style.display = "none";
  displayEmpty();
}

function displayEmpty(){
  if (myLibrary.length !== 0){
    document.getElementById("empty").style.display = "none";
  } else {
    document.getElementById("empty").style.display = "block";
  }
}
displayEmpty();