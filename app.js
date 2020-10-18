var allbooks = document.querySelectorAll("#book-list li .name");

Array.from(allbooks).forEach(function(singlebook){
   singlebook.textContent += '(single book title)';
});

const bookList = document.querySelector('#book-list');
//bookList.innerHTML = '<h2>H2 Heading will be added & replace the whole thing...</h2>';
bookList.innerHTML += '<p>This will add after other text</p>';