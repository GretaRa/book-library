let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    return;
}

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
  return;
  }

addBookToLibrary('title1','author1','22','yes');
addBookToLibrary('title2', 'author2', '55', 'no');
console.log(myLibrary);

const container = document.querySelector('.container');


function displayBook(){
  for (var i = 0; i < myLibrary.length; i++) {

    const element = document.createElement('div');
    element.className = 'bookCard';


    const title = document.createElement('h2');
    title.className = 'title';
    title.textContent = myLibrary[ i ].title;
    element.appendChild(title);

    const author = document.createElement('h3');
    author.className = 'author';
    author.textContent = myLibrary[ i ].author;
    element.appendChild(author);

    const pages = document.createElement('h3');
    pages.className = 'pages';
    pages.textContent = myLibrary[ i ].pages + ' pages';
    element.appendChild(pages);

    const readStatus = document.createElement('h3');
    readStatus.className = 'readStatus';
    readStatus.textContent = myLibrary[ i ].read;
    element.appendChild(readStatus);


    container.appendChild( element );

    
  }
}

displayBook();