var books = document.querySelectorAll('#book-list li .name');

Array.from(books).forEach(function(book){
    book.textContent += "(book title)";
});

const booklist = document.querySelector('#book-list');
booklist.innerHTML = '<h2>Books and More Books</h2>';
booklist.innerHTML += '<p> This is how you add HTML</P>';












// const books = document.querySelectorAll('#book-list li .name');

// Array.from(books).forEach(function(book){
//   book.textContent += ' (Book title)';
// });

// const bookList = document.querySelector('#book-list');
// bookList.innerHTML = '<h2>Books and more books...</h2>';
// bookList.innerHTML += '<p>This is how you add HTML content</p>';
