//Set is a list of unique values

let myArray = [1,2,3,3,4,5,5];
console.log(myArray);

//======convert array to set
// let mySet = new Set(myArray);
// console.log(mySet);


let myObject = {
    a:5,
    b:6
}
// mySet.add(myObject);
// mySet.add(myObject);
// console.log(mySet);
//==========array to set to array for getting unique array
let convertArraytoSetToArr = [...new Set(myArray)];  
console.log(convertArraytoSetToArr);

//====set- 2 Array -union(unique)
let a = new Set([1,2,3]);
let b = new Set([2,4,1]);
let union = new Set([...a,...b]);
console.log(union);

//====set- 2 Array -intersection(common)
let intersection = new Set([...a].filter(x => b.has(x)));
console.log(intersection);

//====set- 2 Array -difference(common)
let difference = new Set([...a].filter(x => !b.has(x)));
console.log(difference);