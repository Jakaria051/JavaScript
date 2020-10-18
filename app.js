// const banner = document.querySelector('#page-banner');
// console.log("banner node type",banner.nodeType);
// console.log("banner node name",banner.nodeName);
// const clonedBanner = banner.cloneNode(true);
// console.log(clonedBanner);

const bookList = document.querySelector('#book-list');
console.log('The parent node is', bookList.parentNode);
console.log('The Parent element is',bookList.parentElement);
console.log('The Parent element is',bookList.parentElement.parentElement);
console.log('the children is',bookList.children);

//sibling
console.log('book-list next  sibling',bookList.nextSibling);
console.log('book-list next element sibling',bookList.nextElementSibling);

console.log('book-list previous  sibling',bookList.previousSibling);
console.log('book-list previous element sibling',bookList.previousElementSibling);

///
bookList.previousElementSibling.querySelector('p').innerHTML += '<br/> cool way to add new text';