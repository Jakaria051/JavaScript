//ES6 Arrow fat function

// function numbers(a,b) {
//     return a+b;
// }

// let numbers = (a,b) => a+b;

// console.log(numbers(10,20));

// var javascript = {
//     name: "javascript",
//     libraries: ["React","Vue"],
//     printLibraries: function() {
//         this.libraries.forEach((value)=>
//          console.log(`${this.name} loves ${value}`));
//     }
// }

// javascript.printLibraries();

const searchInput = document.querySelector(".search");
const result = document.querySelector(".result");
const thanks = document.querySelector(".thanks");

function show() {
    result.innerHTML = this.value;
    setTimeout(()=> thanks.innerHTML = `You have type ${this.value}`,1000)
}

searchInput.addEventListener("keyup",show);
