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

addBookToLibrary('nie','gg','dd','ss');
addBookToLibrary('larry', 'person', 'mimi', 'no');
console.log(myLibrary);

const container = document.querySelector('.container');


function displayBook(){
  for (var i = 0; i < myLibrary.length; i++) {
    // Are you accessing an actual property in your code? It seems
    // you are just referencing the whole object.
    content = myLibrary[ i ].title;

    // Just save the createElement reference ;)
    element = document.createElement('div');

    // Why are you appending [i] instead of i directly?
    element.className = 'bookCard';

    // By saving the element directly we don't have to query for
    // the class in this step. The other problem was probably that
    // `getElementsByClassName` returns an array, so you would have
    // to call:                                      vvv
    // document.getElementsByClassName('card' + [i])[ 0 ]
    element.textContent = content;

    container.appendChild( element );
  }
}

displayBook();