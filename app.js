
//Object distructuring
const student = {
    id: 10,
    name: "Jack",
    dept: "CSE",
    age: "25",
    education: {
        degree: "bechelor",
        year: "2019"
    }
}

//take name from student-object & asssign it to another variable
// const { name: studentName } = student;
// console.log(studentName);

///NESTED destructing

const {education: { degree: x } = {} } = student;
console.log(x);

//Array distructuring

var numbers = [1,2,3,4,5,6,7];
var [,a,,,b] = numbers;
console.log(a,b);

var arrayNested = [1,2,3,[10,20,30,40],4,5,6,7];
var [,,,[,a,b]] = arrayNested;
console.log(a,b);

//swap the value
var a = 1;
var b = 2;
[b,a] = [a,b]; 
console.log(a,b);