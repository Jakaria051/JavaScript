var numbers = [1,2];
var numbers2 = [7,8];
//traditional way
// var newNumbers = [numbers[0],numbers[1],3,4]; 
//spread opeartor
 var newNumbers = [...numbers,3,4]; 
 var newNumbers2 = [...numbers,...numbers2]; //it will work as like concat 

 var immutable = [...newNumbers]; //exact copy of number which is not going to change if newNumbers array added something new 
 newNumbers.push(5);
 console.log(immutable);
console.log(newNumbers);

///REST OPERATOR ---when user given unlimited parameter that time we use this

function myFunc(...params) {
    console.log(params);
}

myFunc(10,202,30,40,50,60,70);
