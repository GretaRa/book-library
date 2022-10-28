let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
  myLibrary.push(new Book(
    document.getElementById('title').value, 
    document.getElementById('author').value, 
    document.getElementById('pages').value,
    document.querySelector('input[name="read"]:checked').value
  ));
  displayBook()
  }

//Container 
const container = document.querySelector('.container');


// function displayBook(){
//   for (var i = 0; i < myLibrary.length; i++) {

//     const element = document.createElement('div');
//     element.className = 'bookCard';

//     const title = document.createElement('h2');
//     title.className = 'title';
//     title.textContent = myLibrary[ i ].title;
//     element.appendChild(title);

//     const author = document.createElement('h3');
//     author.className = 'author';
//     author.textContent = myLibrary[ i ].author;
//     element.appendChild(author);

//     const pages = document.createElement('h3');
//     pages.className = 'pages';
//     pages.textContent = `${myLibrary[i].pages} pages`;
//     element.appendChild(pages);

//     const readStatus = document.createElement('h3');
//     readStatus.className = 'readStatus';
//     readStatus.textContent = myLibrary[ i ].read;
//     element.appendChild(readStatus);

//     container.appendChild( element );
//   }
// }

function displayBook(){

  const element = document.createElement('div');
  element.className = 'bookCard';

  const title = document.createElement('h2');
  title.className = 'title';
  title.textContent = document.getElementById('title').value;
  element.appendChild(title);

  const author = document.createElement('h3');
  author.className = 'author';
  author.textContent = document.getElementById('author').value;
  element.appendChild(author);

  const pages = document.createElement('h3');
  pages.className = 'pages';
  pages.textContent = `${document.getElementById('pages').value} pages`;
  element.appendChild(pages);

  const readStatus = document.createElement('h3');
  readStatus.className = 'readStatus';
  readStatus.textContent = document.querySelector('input[name="read"]:checked').value;
  element.appendChild(readStatus);

  container.appendChild( element );

}

function openTheForm() {
  document.getElementById("popupForm").style.display = "block";
}

function closeTheForm() {
  document.getElementById("popupForm").style.display = "none";
}