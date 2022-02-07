var numbers = [1,2,3,4,5,6];

//Array.prototype.map()

var result = numbers.map((num) => {
    return 2* num;
});
console.log(result);
//Array.prototype.reduce()


var sum = numbers.reduce((previousValue,currentValue) => {
    return previousValue + currentValue;
},0);

console.log(sum);

//Object
var myObj = {
    name: "Javascript",
    founder: "Brenden Eich",
    estd: "1995",
    ranking: 1
};

var keys = Object.keys(myObj);
var values = Object.values(myObj);
var entries = Object.entries(myObj);

console.log(entries);
