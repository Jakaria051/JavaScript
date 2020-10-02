var titles = document.getElementsByClassName('title');
console.log(Array.isArray(titles)); //this willl return false 
console.log(Array.isArray(Array.from(titles)));  //this will turn into an array & will return true




Array.from(titles).forEach(function(item) {
    console.log(item);
});