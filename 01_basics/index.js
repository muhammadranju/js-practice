console.log("Hello wordl");
const fristName="Md"
const lastName="Ranju"

console.log(fristName.concat(' ',lastName));



const myName=['MD',"Ranju","Amin"]
const myName2=['Muhammad', "Ranju",'Ranju']

const allName=myName.concat(myName2)
console.log(allName);

const allName2=[...myName, ...myName2]
console.log(allName2);


console.log(Array.isArray('Md Ranju'));
console.log(Array.from({ }));

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));



 const obj={
    name:"Md Ranju",
    age:20,
    work:"Development",
    time:"10am-8pm"
 }
 const obj2={
    name:"Md Amin",
    age:20,
    work:"Programming",
    time:"10am-8pm"
 }
 const obj3={
    name:"Muhammad Ranju",
    age:20,
    work:"JavaScript Programmer",
    time:"10am-8pm"
 }

const arrs=['Md Ranju',20,"Progmaming"]

const [name,age,work]=arrs


 const {name:myNaneIsRanju}=obj3
 console.log(name,age,work);
 const allOjb=[
    obj,obj2,obj3
 ]

 const spreddObj={...obj, ...obj2,}

 console.log(spreddObj);
 console.log(Object.keys(obj3));
 console.log(Object.entries(obj3));



const myJSON={
   "name":"Md Ranju",
   "age":20,
   "work":"Programming"
}
console.log(myJSON);