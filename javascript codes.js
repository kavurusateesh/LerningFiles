const users = [{firstName:'satish',lastName:'kavuru', age : 32},
{firstName : 'shanti', lastName :'kavuru', age: 26},{firstName:'Sai', lastName : 'Gudala', age:17},
{firstName :'Deepak', lastName : 'Guduri', age: 17}]

const dd = users.filter((item)=>{ return item.age > 23 }).map(item1 => 
{ return item1.lastName + ' ' + item1.firstName}).sort();

console.log(dd)

const output = users.map(item=> item.lastName + ' ' + item.firstName).sort();

console.log(output)

const array1 = [1, 30, 100000, 4, 21 ];
console.log(array1.sort( (a, b) => { return  a - b }))

// result  = {32:1,26:1,17:2}
const output2 = users.reduce((acc, curr)=>{ 
if(acc[curr.age])
{
acc[curr.age] = ++ acc[curr.age]
}
else{
  acc[curr.age] = 1;
}
return acc;
},{});

console.log('------ Age count ---', output2);

const output3 = users.reduce((acc, curr)=>
{ 
if(acc[curr.firstName])
{
acc[curr.firstName] = ++ acc[curr.firstName]
}
else{
  acc[curr.firstName] = 1;
}
return acc;
},{});

const rr = users.filter((item)=>{ return item.age > 25 }).reduce((acc, curr)=>{ 
//     if(acc[curr.firstName]){
//     acc[curr.firstName] = 2 }else{
//     acc[curr.firstName] = 1;
// }  
    acc.push(curr.firstName);
    return acc;
},[])

 console.log(rr)
 
const phone = '7885025909';
const dd = [...phone].reduce((acc, cur)=>{
    acc[cur] ? acc[cur] = acc[cur]+acc[cur] : acc[cur] = 1;
    return acc;
},{})

console.log("-------17------", dd);

const str = "aaabbbccccadefcg";
words = str.split("");
var obj = [];
for (let i = 0; i < words.length; i++) {
    if (obj[words[i]]) {
      obj[words[i]] = ++ obj[words[i]]
    }
    else
    {
    obj[words[i]] = 1;
    }

}
console.log(obj);

str = "aaabbbccccdefg";

words = str.split("");

var obj = [];

var counter = 1, jump = 0;

for (let i = 0; i < words.length; i++) {
    console.log('----counter ----', counter+'----jump---'+ jump);
    if (words[i] === words[i + 1]) {
        counter++;
        jump++;
    }
    else {
        if (jump > 0) {
            obj[words[i]] = counter;
            jump = 0;
            counter=1
        }
        else
            obj[words[i]] = 1;
    }

}
console.log(obj);

let n = 5; // row or column count
// defining an empty string
let string = "";

for(let i = 0; i < n; i++) { // external loop
  for(let j = 0; j < n; j++) { // internal loop
    if(i === 0 || i === n - 1) {
      string += "*";
    }
    else {
      if(j === 0 || j === n - 1) {
        string += "*";
      }
      else {
        string += " ";
      }
    }
  }
  // newline after each row
  string += "\n";
}
// printing the string
console.log(string);
// ouput 
*****
*   *
*   *
*   *
*****
//--- ------------------
let num = 5;
let string = '';
for(let i = 1; i <= num; i++)
{ 
    for(let j =0; j < num -i; j++)
    {
       string +=' '; 
    }
    let k = i;
while( k > 0)
{
   string += '*';
  k--;  
}
string += '\n';
  

}
console.log(string)
//--- output---------------------//
    *
   **
  ***
 ****
*****

//--------------------------------------------//


let n = 5;
let str = '';
for(let i = n; i >= 0; i--){
    str += '\n';
  for(let j = 0; j<=i; j++)
  {
      str += '*'
  }

}
   console.log('-----------',str)
******
*****
****
***
**
*   
//-----------------------------//
let n = 5;
let string = "";
// External loop
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < 2 * i - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
//-------------output---------------//
    *
   ***
  *****
 *******
*********
//------------------------------//
 let n = 5;
let string = '';
for(let i = 0; i < n; i++)
{
    for(let j=0; j < i; j++)
    {
        string += ' ';
    }
    for(let k = 0; k< 2* (n-i) -1; k++)
    {
        string +='*';
    }
    string +='\n';
}

console.log(string)
//-------------------output -----------------//
*********
 *******
  *****
   ***
    *
//------------------------------------------------//	
	
let ageGroup = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10];
const agecount = ageGroup.reduce((acc, curr)=>{
    console.log("-----", acc.indexOf(curr),   '-----', curr)
    if(acc.indexOf(curr) === -1) 
    {
        acc.push(curr)
    }
  
    
    return acc
},[])
 console.log(agecount)
 
   const tt = users.reduce(function (accumulator, currentObject) {
    let key = currentObject['age'];
    if (!accumulator[key]) {
      accumulator[key] = [];
    }
    accumulator[key].push(currentObject);
    return accumulator;
  }, {});
  
 function recurse(count){
 
   //console.log("----", count);
    let newcount = count - 1 ;
    if(count > 0){
      
      return count + recurse(count - 1)
       
    }
    else
    {
        return count;
    }
   
    
}

console.log(recurse(10))


// abcab-----------------
let str = 'abcab';
console.log(str.charAt(0))
console.log(str.indexOf('c'))
console.log(str.lastIndexOf('c'))
function string(str){
    for(let i = 0; i < str.length; i++)
    {
        var j = str[i];
        if(str.indexOf(j) === str.lastIndexOf(j))
        {
            return j;
        }
    }
}
console.log(string(str))

Debouncing --- search option like flipkart

const debouncing = (cb, t) =>{
let timer;
return function(...args){
if(timer){
clearTimeout(timer)
}
timer = setTimeout(()=>{ cb(...args)}, t)

}

}

//------------------------ Call apply bind -------------------------------//
call: binds the this value, invokes the function, and allows you to pass a list of arguments.

apply: binds the this value, invokes the function, and allows you to pass arguments as an array.

bind: binds the this value, returns a new function, and allows you to pass in a list of arguments.

const book = {title:"bookA", auther : "sundhar"}

function check(){
  console.log(`${this.title} was write by ${this.auther}`)
}
check.call(book) or check.apply(book)

function Car(type, fuelType)
{
    this.type=type;
    this.fuelType = fuelType;
}

function Typeofcar(brand)
{
    Car.call(this, "convertible", 'Petrol');
    this.brand = brand;
    console.log("------------", this)
}
function Typeofprice(price)
{
    Car.apply(this, ["convertible", 'Desial'])
    this.price = price;
    console.log("----------", this);
}
const Valuetype = new Typeofcar('Maruthi')
const Value = new Typeofprice(60000)

//----------------------------------------------------------------//

function Employee(department, name)
{
    this.name = name;
    this.department = department;
    console.log(this);
}

function checking(company)
{
    Employee.call(this, 'Testing', 'bhanu');
    this.compaanyName = company;
   console.log(this);
}

let callFunction = new checking('AthenaGT');

let person ={companyName:'Nyletech'};

let bindFun = Employee.bind(person);

bindFun('Developer', 'Satish')



//------------------------- filter of prime number ----------------//
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

function prinmeNum(num){
    for(let i=2; num > i; i++){
        if(num % i === 0)
        {
            return false;
        }
    }
    return num > 1
}

console.log(array.filter(prinmeNum))

let dd = array.filter(item=> {
    for(let i = 2; item > i; i++){
      if(item % i === 0)
      {
          return false;
      }
    }
    return item > 1;
})
console.log(dd);
//---------------------- Prime Number find 1 to 100 -----------------------//

 array1 = [10, 5, 14, 3, 25, 18, 32, 20, 12, 39, 27, 1, 22, 8]
 
 function Primenum(num){
     for(let i =2 ; i<num; i++){
         if(num % i === 0)
         {
             return false;
         }
     }
     return num;
 }
 console.log(array1.filter(Primenum))
 
 //--------------------Prime number find 1 to 100 numbers -------------------------//
 function isPrime(num)
  {
      if(num < 2){
          return false;
      }
      for(let i=2; i < num; i++){
          if(num % i === 0)
          {
              return false
          }
      }
      return true;
  }
  
  let PrimeArr = [];
  for(let i = 1; i < 100; i++){
      if(isPrime(i) === true)
      {
          PrimeArr.push(i)
      }
  }
  console.log(PrimeArr)
 
 //-----------------------------------------------------------------------------------//




let removestirng = [1,2,3,'a','a','f',3,4,2,'d','d']

const d = removestirng.filter(item =>{
if(typeof(item) === 'number')
{
    return true;
}
})
console.log("-----d-----", d)



//------------------------- match -------------------------//
const y = 'z';
const a = [{key: "x", val: "y"},  {key: "d", val: "z"}]
const data = a.filter(res => {
        return(JSON.stringify(res.val).toLocaleLowerCase()).match(y.toLocaleLowerCase());
});

console.log(data)

//-------------------- Duplicate values -------------------------//

var arr = [1,2,3,4,,5,2,4,6,2,1]
var mySet = new Set(arr);
console.log('--', mySet) //output - set(['Entries':[1,2,3,4,5,6]] // so here removed Entries
let mySetArr = Array.from(myset) // output - [1,2,3,4,5,6]

//---------------------------------------------------------------//
let dupes = [1,2,3,'a','a','f',3,4,2,'d','d']

let withoutDupesFilter = dupes.filter((item, index) =>{
     return dupes.indexOf(item) === index
})
console.log("------", withoutDupesFilter);

 var arr = ["apple", "mango", "apple", "orange", "mango", "mango"];
 
   function removeDuplicates(arr) {
	   
        var unique = [];
        arr.forEach(element => {
            if (!unique.includes(element)) {
                unique.push(element);
            }
        });
        return unique;
    }
 
    console.log(removeDuplicates(arr));
	
	

const arr=[1, 2,3,4,5,6,2,3,4]
Const duplicateArr=arr.filter((item,index,arr)=>arr.indexOf(item)==index);

const array1=[{name:'Primarycamera'},{name:'QLed'}, {name:'ROM'}, {name:'ROM'}, {name:'QLed'}];


 let finalarry = [];
array1.forEach(item=>{
    if(finalarry.some(el=> el.name == item.name ) == false)
    {
        finalarry.push(item);
    }
})

console.log("---- array1filter ----", finalarry)
const array2=['Primarycamera', 'LED', 'RAM'];
const array3=['Secondarycamera', 'Dragon', 'RAM'];


function callFunction(...arrays)
{
    return arrays.reduce((first, second)=> {
    if(first.indexOf(second))
    return first.concat(second)
    }
    )
}

const finalarr = callFunction(array1, array2, array3);
console.log(finalarr)
// const duplicate = finalarr.filter((item, index)=>{
//     return finalarr.indexOf(item) === index;
// })
// console.log('==== duplicate value-----',duplicate)

let dupes = [{name:'satish'},{name:'shanti'},{name:'sai'},{name:'satish'}];
let arr = [];
let obj = {};
for(let i in dupes)
{
    obj[dupes[i].name] = dupes[i];
}
for(let j in obj){
    arr.push(obj[j])
}
console.log(arr)

let dup = new Set(dupes.map(JSON.stringify));
let removed = Array.from(dup).map(JSON.parse);
console.log( removed)
let duplicates = [1,2,3,4,5,5,6,2,1,6,9];
let dum = new Set(duplicates.map(JSON.stringify))
console.log(Array.from(dum).map(JSON.parse))


const removed = dupes.reduce((acc, cur)=>{
   if(!acc.some(item=> item.name == cur.name))
   {
       acc.push(cur)
   }
   return acc; 
},[])
console.log(removed)


let dupes = [1,2,3,'a','a','f',3,4,2,'d','d']
let withoutDupes = dupes.reduce((noDupes, currVal)=>{

    if(noDupes.indexOf(currVal) === -1)
    {
        noDupes.push(currVal);
    }
    return noDupes;
}, []);

console.log("-------12-----", withoutDupes)


//---------------------------------------------------------------//
//----------------------------- Reduce -------------------------//
const places = {
   tours: {
      nearMe: {
          mumbai: {
              date: 'Sun Dec 25',
              loc: 'The Taj',
              cost: '3000.00',
          },
      },
    }
}

const paths = ['tours', 'nearMe', 'mumbai', 'loc'];

function getLoaction(places, paths){
    

return paths.reduce((object, path)=>{
          return (object || {})[path]
}, places)

}

console.log('------places------', getLoaction(places, paths));

let obj = [
  {name: 'Alice', job: 'Data Analyst', country: 'AU'},
  {name: 'Bob', job: 'Pilot', country: 'US'},
  {name: 'Lewis', job: 'Pilot', country: 'US'},
  {name: 'Karen', job: 'Software Eng', country: 'CA'},
  {name: 'Jona', job: 'Painter', country: 'CA'},
  {name: 'Jeremy', job: 'Artist', country: 'SP'},
]
let pp = obj.reduce((group, curP)=>{
    let newKey = curP['country'];
 if(!group[newKey]){
     group[newKey] = [];
 }
 group[newKey].push(curP)

return group;
    
}, [])

 console.log('----12-----', pp)
 
 
 let array = [{auther:'pradeep', type : 'book'}, {auther:'kiran', type : 'book1'}, {auther:'pradeep', type : 'book2'}, ];

// {pradeep:[book, book2], kiran:[book1]}

// let array1 = [1,9,2,4,11,1,7] sum = 18
// let arr = [];

const data = array.reduce((acc, cur)=>{
   let key = cur['auther'];
  
   if(!acc[key])
   {
       acc[key] = [];
       acc[key].push(cur.type)
   }
   else
   {
       acc[key].push(cur.type)
   }
   return acc;
},{});
console.log(data)
 
 
 //------------------------- -------------------//
 let Person = function(firstname, lastname, age)
{
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age
   
}
let person = new Person("satish", "k", "30");

person.sayHello = function()
{
    alert("Hello " + this.lastname + " " + this.firstname)
}
person.sayHello();

//---------------- Closure Exp--------------//


let buttonProps = (patientId) =>{
	const crePatineAppointmentdetails = (doctorId, date) =>{
		const newprops = {			
			doctordetails : data.doctors,
			patientAppoints : patientDetails.apppoints
		}
		return newprops;
	}
	return crePatineAppointmentdetails
	}
calling is 

const doctorDetails = buttonProps(patiendid);

so ekada manaki crePatineAppointmentdetails closure avutadi so ala avatam vall manai epudu kenda chepynatuga doctorDetails ki mottam function ni return avutadi kabhati
assign aina varible lo manam parameters pass chesta chalu edy closure concept.

const patientAppointDetails = doctorDetails(doctorId, date);	

function make(x){
    return function (y){
        return x+y;
    }
}

const add1 = make(5);
const add2 = make(10);

const make=(x)=>{
    return (y)=>{
        return x+y;
    }
}

const add1 = make(5);
const add2 = make(10);

console.log("---- add1--", add1(2));
console.log('---add2----', add2(2))

console.log("---- add1--", add1(2));
console.log('---add2----', add2(2))
//ouput  ---- add1-- 7 ---add2---- 12

// ------------ swaping two number ----------------//
let a=10, let b=20 how to swaming both valuse?
let a=10; let b=20;
 [b,a] = [a,b];
console.log(`a=${a}  b=${b}`)
temp =a;
a=b;
b=temp
console.log(`a=${a} b=${b}`)

//----------------------- sum of two numbers and display the match of array ----------------//
const indices = (numbers=[1,2,3,4,5,6], sum=10)=>{
     for(let i=0; i < numbers.length; i++)
     { 
         const num = numbers.indexOf(sum - numbers[i]);
         if(num !== -1 )
         {
            return [numbers[i],numbers[num]]
         }
     }
 }
 console.log(indices());
 
 const indices = (numbers=[1,2,3,4,5,6,7,8], sum=10)=>{
     let finalArr = [];
     for(let i=0; i < numbers.length; i++)
     { 
       for(let j= i+1; j < numbers.length; j++)
       {
           if(numbers[i]+numbers[j] == sum)
           {
               finalArr.push([numbers[i], numbers[j]])
           }
           
           
       }
       
     }
     return finalArr;
 }
 console.log(indices());
 
 //------------------------ Using some -----------------//
 
 const arr = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 1 }, { id: 3 }];
        var newArr =[];
        arr.forEach((item)=>{ 
        if(newArr.some(el=> el.id === item.id) === false)
        {
            newArr.push(item);
        }
        }
        ); 
        console.log(newArr);
       //[{id: 1}, {id: 2}, {id: 4}];
	   
	   
//-------------------- Set ---------------------------//
const student = {
    firstName: 'fdsfsfsd',
       //accessor property(setter)
    set changeName(newName) {
        this.firstName = newName;
    }
    
 
};

console.log(student.firstName); // Monica
student.changeName = 'satish';
console.log(student.firstName)	 
// ------------------- Get -------------------//
const student = {

    // data property
    firstName: 'Monica',
    
    // accessor property(getter)
    get getName() {
        return this.firstName;
    }
};

// accessing data property
console.log(student.firstName); // Monica

// accessing getter methods
console.log(student.getName); // Monica  

//---------------------------- Reduce ----------------//
const array2=['Primarycamera', 'LED', 'RAM'];
const array3=['Primarycamera', 'LED', 'RAM'];
const array4=['Primarycamera', 'LED', 'ROM'];

const commonFilter = (...arr)=>{
return arr.reduce((first, second)=>{
    return first.filter(f=> second.includes(f))
})
}
const commonF = commonFilter(array2, array3, array4);

console.log("---commonf----", commonF)
//------------------------------------------------------------------//
const phone = '7885025909';
/**
 * Output should be exactly the following
 * 0, 2
 * 2, 1
 * 5, 2
 * 7, 1
 * 8, 2
 * 9, 2
 */
function printFormat(str) {
  //write your code here to get the above output.
  let obj = {};
  for (let s of str) {
    if (obj[s]) {
      obj[s] += obj[s];
    } else {
      obj[s] = 1;
    }
   
  }
  return obj;
}
console.log(printFormat(phone));

//----------- call back function ---------------//
function getname(name, callback, another)
{
    callback(name, another);
    
}
function display(name, dd)
{
    console.log('Hi '+name+' This is the callback function')
    dd(name)
}
const dd = (text)=>{
    console.log('This is the movie- ', text);
	}
getname('satish', display, dd);

//---------------------------------Time format ------------//
  const substrat1Minutes = moment()
  .subtract(1, "minutes")
  .format("HH:mm");
//const substrat1Minutes = moment().subtract(2, "minutes").format("HH:mm");

const currentDate = moment().tz(timeZone).format("YYYY-MM-DD");

// String reverse 
let str = 'This is the testing';
let reverseString =(strdata)=>{
    let obj='';
    for(let i = strdata.length-1; i >= 0; i--)
    {
        obj += strdata[i];
    }
    return obj;
}
console.log(reverseString(str))

let str = "This is the testing";
let obj='';
for(let i=0; i< str.length; i++)
{
   
    obj = str.charAt(i) +  obj;
}
console.log('------7-----', obj);

const fruits = ["Banana", "Orange", "Apple", "Mango",'dafdfa'];
slice(optional start parameter, optional end parameter)
console.log('--- shift----', fruits.slice(0,3));
const fruits = ["Banana", "Orange", "Apple", "Mango",'dafdfa'];
console.log('--- slice---', fruits.slice(0,2)) 
//0 means position - 2 means lenght
let dd = 'This is the data'
console.log(dd.substr(0,5)) 
console.log(dd.substring(3, 6)) 
const arr = [0,2,3,4,5,9];
console.log(arr.slice(-1)) // output - [ 9 ]
// 5 means lenth 0 means position - if you defind direct single value
// its returns total string after posistion. 
const fruits = ["Banana", "Orange", "Apple", "Mango",'dafdfa'];
splice(start, optional delete count, optional items to add)
let dd = fruits.splice(0,3, 'satish', 'shanti'); // 0 is the position 3 is the lenght
console.log(dd);
console.log(fruits);
//------- [ 'Banana', 'Orange', 'Apple' ] ------[ 'satish', 'shanti', 'Mango', 'dafdfa' ]
// let arr = [1,5,6,7,9] we can get midle number of the array
// palandrom print 
let str = 'madam';
function validation(data)
{
 for(let i =0; i < data.length/2; i++)
 {
    if(str[i] != str[data.length-1-i]) 
    {
        return 'It is not a palindrome';
    }
 }
 return 'It is a palindrome';
}
console.log(validation(str))

//----------- Password gen -------------//
function generatePassword() {
  var length = 8,
      charset = "abcddsf858522255222efghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
      retVal = "";
  
  for (var i = 0, n = charset.length; i < length; ++i) {
      retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  for(var i=0; i < 8; i++)
  {
    obj += charset.charAt(Math.floor(Math.random() * charset.length))
  }
  return retVal;
}
//----------------- has key different thinks ------------------------------------------//
let user = {
  name: "sdcsfsd",
  age: 40
};
console.log(user.hasOwnProperty('name'));
console.log('name1' in user);
console.log(Object.keys(user).includes('name1'))
//-------------------------------------------------------------------------------------//
if('age' in user)
{
    console.log('true')
}
else
{
    console.log('false')
}
var myMap = new Map([['a', 1], ['b', 2], ['c', 3]]);

console.log(myMap.has('a'))
//-----------------------------------------------------------------------------//
let past_record_arr = ["https://telemedicine-app-storage.s3.ap-south-1.amazonaws.com/Multimodule/Patient/Medicaldocuments/1631163161260.jpg",
"https://telemedicine-app-storage.s3.ap-south-1.amazonaws.com/Multimodule/Patient/Medicaldocuments/1618903798651%20-%20Copy.jpg",
"https://telemedicine-app-storage.s3.ap-south-1.amazonaws.com/Multimodule/Patient/Medicaldocuments/Capture_regis_issue.PNG"];

 let imagepathArray = ["https://telemedicine-app-storage.s3.ap-south-1.amazonaws.com/Multimodule/Patient/Medicaldocuments/1618903798651%20-%20Copy.jpg"];
 
 let filterArray = new Set(imagepathArray);
 let difference = [...past_record_arr].filter(x => !filterArray.has(x));
 
 //-------------------------------------------------------------------------//
 let user = {
  name: "sdcsfsd",
  age: 40
};
console.log(!user['name'])
//---------------------------------------------------------------------------------------//
//------------------------ Promise type all allSettled any race ------------------------------//
Promise.all([Promise.resolve(1), Promise.reject(2)])
.then((ss)=>{console.log("Success--",ss)})
.catch((err)=>{
    console.log('----err--', err);
})

output is --- ----err-- 2
  
 Promise.allSettled([Promise.resolve(1), Promise.reject(2)])
 .then((allsettled)=>{
     console.log('---allsettled----', allsettled)
 })
 .catch((err)=>{
     console.log('-----err----', err);
 })
 
 output is -
 
 ---allsettled---- [
  { status: 'fulfilled', value: 1 },
  { status: 'rejected', reason: 2 }
]

//------------------------------------------------------------------------------------//


function dd(){
  var a = 10;
 console.log(this.a);
}
dd();
output : undefined

pi1 --> func(){    while(true)};    api2 --> func2(){ res.send("Hello")}

greetings()
greetings=()=>{
    console.log('Greet1')
}
greetings()
function greetings(){
	console.log("Greet2");	
}
greetings()

output ---
Greet2
Greet1
Greet1


{"F1":"val1", "F2":"val1", "F3":"val1", "F4":"val1"}
Index on f1
F1
to fetch F1,F2,F3
//-------------------------------------------------------------------------------------//
//-------------- setImmediate and process.nextTick -------Invoked-------------//
setTimeout(() => console.log('setTimeout'), 0);
setImmediate(() => console.log('setImmediate'));
process.nextTick(() => console.log('nextTick'));

const myObj = {
  prop1: "value1",
  prop2: "value2"
};
console.log(myObj.hasOwnProperty('prop2'))


//----------------------------------------------------------------------------------//

let text = "The best things in life are free";
let result = /fr/.exec(text);
console.log(result)

let text = "The best things in life are free";
let result = /ghghh/.test(text);
console.log(result) 
output is ---  false

What is currying in JavaScript?
function add(a)
{
    return function(b){
        return a+b;
    }
}
const val = add(20)(5);

console.log(val)

//------------------------------ Max and min value find out -----------------------//
    user = [ { name :'Dilip', age: 34, height: 67},
{ name :'Akash', age: 31, height: 48},
{ name :'Anil', age: 24, height: 72},
{ name :'Praveen', age: 21, height: 85},
{ name :'Mahesh', age: 35, height: 63} ]

const maxVal = user.reduce((acc, cur)=>{
    return acc.height > cur.height ? acc: cur
})
console.log(maxVal)

const Max = user.sort((a,b)=> b.height - a.height)[0];
console.log(Max)
const Min = user.sort((a,b)=> a.height - b.height)[0];
console.log(Min)

//------------------------------Generator function -----------------------------------//
function* genFunction(){
    console.log('---1st line ---');
    yield 'satish';
    console.log('---2nd line----');
    yield 200;
    console.log('---3rd line----');
}
const Gen = genFunction();
console.log(Gen.next())
console.log(Gen.next())
console.log(Gen.next())

//---------------------------------------------------------------------------------------//
var obj = {
    name:  "vivek",
    getName: function(){
    console.log(this.name);
  }
}
var getName = obj.getName;
console.log('----8----', getName);       
var obj2 = { name:"akshay", getName };
obj2.getName();

//------------------------------------------------------------------------------------------//

let array = [{id:1, stockname:'Powder'},{id:2, stockname:'books'},{id:5, stockname:'Pens'},{id:1, stockname:'Powder123'}];
let arr = [];

console.log(array.find(o=> o.id == 1));


let arr = [
    { name:"string 1", value:"this", other: "that" },
    { name:"string 2", value:"this", other: "that" }
];

let obj = arr.find((o, i) => {
    if (o.name === 'string 1') {
        arr[i] = { name: 'new string', value: 'this', other: 'that' };
        return true; // stop searching
    }
});

console.log(arr);

//-----------------------------------------------------------------------------//


let array1 = [1, 9, 2, 4, 11, 1, 7];
let targetValue = 18;
let result = [];

for (let i = 0; i < array1.length; i++) {
  for (let j = i + 1; j < array1.length; j++) {
    if (array1[i] + array1[j] === targetValue) {
      result.push([array1[i], array1[j]]);
    }
  }
}

console.log(result);


//--------------------------- Recursive function ------------------------//

function firstRecurringCharacter(str)
{
    let obj = {}
    for(let i=0; i < str.length; i++){
        if(obj[str[i]])
        {
            return str[i];
        }
        obj[str[i]] = 1
    }
    return '-'
}

console.log(firstRecurringCharacter("acbcabc"));  // Output: 'b'
//console.log(firstRecurringCharacter("acbxbac")); // Output: 'b'
//console.log(firstRecurringCharacter("abcdef"));  // Output: '-'

//----------------------- Prime Numbers -------------------------------------------------//
array = [10, 5, 14, 3, 25, 18, 32, 20, 12, 39, 27, 1, 2, 22, 8];
function PrimeNum(num)
{
    for(let i=2; i < num; i++){
        if(num % i === 0)
        {
            return false
        }
    }
    return num > 1
}

let data = array.filter(PrimeNum);
console.log(data)

//----------------------------------------------------------------------------------------//

const input1= {a: 2, b: 3, c: 10, d:12};
const input2= {c: 10, b: 1, d: 12, a: 7};
//output: {c: 10, d: 12}
let output = {}
for(let key in input1)
{
   
if(input1.hasOwnProperty(key) && input2.hasOwnProperty(key) && input1[key] === input2[key])
{
    output[key] = input1[key];

}
}
console.log(output)

//-------------------------- Compaire two array same or not --------------------------------------//
let aaa1 = [1, 2, 3, 4];
let aaa2 = [1, 2, 3 ,4];

function Compaire(arr1, arr2){
    if(arr1.length !== arr2.length)
    {
        return false;
    }
    return arr1.every((item, index)=> item === arr2[index])
}
console.log(Compaire(aaa1, aaa2))

console.log(aaa1.every((item,index)=> item === aaa2[index]))

//-----------------------------------------------------------------------------------------------//


kak type orm statement express migration sequilze docker compose -d aws- imo role permision. 