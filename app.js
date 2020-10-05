var titles = document.getElementsByClassName('title');
//console.log(Array.isArray(titles)); //this willl return false 
//console.log(Array.isArray(Array.from(titles)));  //this will turn into an array & will return true

Array.from(titles).forEach(function(item) {
   // console.log(item);
});


///Query Selector
const singleItem = document.querySelector('#book-list li:nth-child(2) .name');
//console.log(singleItem);
const allItems = document.querySelectorAll('#book-list li .name');
//console.log(allItems);

Array.from(allItems).forEach(function(singleItem){
console.log(singleItem);
});