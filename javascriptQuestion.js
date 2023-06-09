Interview Question 
1)what is the javascript hosting? so how its work?

2)what is difference between let and var ?
3)what is event loop?
4)what is difference b/w setout and setInterval?
5)what are the es6 futured you have to used?
6)where you have to used rest operator?
7)i want to check a string palandrom or not i had a array.reverse()?
8)what is cello copy and deep copy?
A deep copy means that all of the values of the new variable are copied and disconnected from the original variable. 
A shallow copy means that certain (sub-)values are still connected to the original variable. 
To really understand copying, you have to get into how JavaScript stores values.
9)what are closers?
A closure is the combination of a function bundled together, In other words, a closure gives you access to an outer function's scope from an inner function.
10)what is the difference between == and === ?
let string = 10;
console.log(typeof(string))
let checkval = string == "10"; // it is true
let checkval = string === "10"; // it is false
let checkval = string === 10; // it is true
console.log(checkval)
10)have you used any reduce function in javascript?
11)what is the difference b/w promise and call back?
12)how to find even number or odd number  calculated? num % 2 === 1 OR evn is - num % 2 === 0
13)What is flexbox? we are using so many tools used like boostrap custom css
14)Display nun and visiblety hidden?

15)what are you used to hooks?
so here lifecycle hooks means class wise functional hooks is different usestate, useref, usereducer, usememo, usecallback
16)what is react usecallback?
17)what is the getderivedstatefromprops? (before rendering the component its calling this mothod exp
super()
this.state={currentVal:0}
exp -static getDerivedStateFromProps(props,state){
console.log(props,state);
return {currentVal : props.data * 10 }
}
18)what is that pure compoent?
19)what are higher order component HOC ?
20)Have you used any context apis?
21)Have you used any middleware? saga and redux think
22)why we are go middleware? there is intaractor in reducer and action so here made changes action type is passed based on type reducer is called in the middle ware is performd
23)which version is currently used? so iam using latest version
24)what is the arrow function?
25)what is the callback function?
26)Do you know recursive function? 
A recursive function is a function in code that refers to itself for execution. Recursive functions can be simple or elaborate. 
They allow for more efficient code writing.
Recursion is a process of calling itself. 
function countDown(number) {

    // display the number
    console.log(number);

    // decrease the number value
    const newNumber = number - 1;

    // base case
    if (newNumber > 0) {
        countDown(newNumber);
    }
}
countDown(4);

27)if you have any fetching time any error in react page component so how can you handle it? In class based compoent we are used to componentDidCatch(err){}
28)what is that object.sield object.freeze ? freeze means object properties cannot be changed exp     
const person = {
         "name" : "Suresh",
         "Country" : "India",
         "Designation" : "Mayor"
      }
	  Object.freeze(person);
      person.Country = "England"
      console.log(person.Country);
	  freeze - create(no) read(yes) update(no) delete(no) seal - create(no) read(yes) update(yes) delete(no)  preventExtensions - create(no) read(yes) update(yes) delete(yes) 
	  
29)what is the http methods ? get put post delete
30)what is different class componet and functional component main advantage of functional component?
A class component requires you to extend from React.Component and create a render function which returns a React element.
Main is class component is convert into functional component.so functional component is most fasted compair to class component and code reduced
31)Can you tell me exmaples of hooks ? for state management used has - usestate hook life cycle methods useeffect usememo usecallback
32)what is difference between usecallback and usemomo?	 usemomo is values is return use callback is return to function like any object 
33)can i return undefind from my render function?
34)can you explain that shadow dom? its mean real dom
35)what are the state less components? state less mean with out useing state values and maintain the data so its display the plain html and using props ref values
36)what are the prop types and what is the use?
37)what are array boundrys?
38)Have you avoid server side rendering?
39)what is lexical scop?  Lexical scope is the definition area of an expression.
function getName() {
  const myName = "Oluwatobi";
  return myName;
}
40)what you understand iife? 
If you run above example, you will find that every time it call display() function in MyScript2.js because MyScript2.js included after MyScript1.js in a web page. So JavaScript considers last definition of a function if two functions have the same name.
IEFE solves this problem by having its own scope and restricting functions and variables to become global. The functions and variables declare inside IIFE will not pollute global scope even they have same name as global variables & functions. So let's see what is an IIFE is.
exp: Myscript1 
var userName = "Bill";

function display(name)
{
    alert("MyScript1.js: " + name);
}

display(userName);

var userName = "Steve";

function display(name)
{
    alert("MyScript2.js: " + name);
}

display(userName);

41)what you understand function curring? that means divided into function based on the sending our parameters. exp like it is a chaining
function getstudentInfo(cls){
return function(section){
 return function(rolenum){
 return cls + section + rolenum;
 }
}
}
console.log(getstudentInfo('6th'))
console.log(getstudentInfo(6th)('A-'))
console.log(getstudentInfo(6th)('A-')('36'))
var classname = getstudentInfo('6th');
console.log(classname('A-');
42)Can you explain me prototype inhiritence?
43)what is this key word? if called in the form of obj.function() this equal to point of obj this is local obj direct to say other wise dirrect write to function 
that is the global object its displayed.
obj={
name:'satish',
add:function(){ console.log(this === obj)}
}
44)what is face challenging in node js?
45)const obj = { 1: 'a', 2: 'b', 3: 'c' };
const seta = new Set([1, 2, 3, 4, 5]);
console.log(obj.hasOwnProperty('1'));
console.log(seta.has('1'));
46)Date formate converted to utc?
47)what is the call vs bind and apply?
48)Can you explain me prototype inheritance?
49)what is the controll and uncontroller?
50)what is pure function and impure function?
let x=100;
function pure(a,b){
	return a*b;
}
console.log(pure(5,5)) -- // manam eee function ni use chesy with our side varibles kani yaemi changes cheyatam ledu alaga manam yaeni sarllu call chesyna same
output na manaku show chesy chupestundi so elanti function ni pure function ani antamu so next manam
function impure(a,b){
	return a*b+Math.reandom();
}
console.log(impure(5,5)) // so ekada manaki same orguments na pass chestunam kani output matram call chesyna praty sari change aipotadi.
let x=10;
function predicable(a,b){
	x +=1;
	return a*b;
}
console.log(predicable(5,5), "x:" x) so ekada amnam eee console log yaeni sarlu print chesta ani time output change aipotadi

52)Explain is Scope in JavaScript?
The scope is basically a collection of variables as well as the rules for how those variables are accessed by name. 
Only code inside that function can access that function's scoped variables.

1)what is javascript?
2)javascript is accepts in oops?
3)javascript is text or oops?
4)where the decode the javascript? -- its convert to json ie JSON.stringfy and JSON.parse
5)In javascript where ever you have to debuger ?
6)let aaa1=[1,2,3,4] let aaa2=[1,2,3,4] how to compaire to array is it same then only return true?
7)react js useEffect(()=>{ console.log("This is 1st line") return ()=>{console.log("This is 2nd line")}},[age])
8)promise.all and promise.allsetteled difference == allsettled means all promise are resolve other wise it going to reject 
9)i am passing array in that array values is [1,2,3,4,5,6,7,8,9,10] so separate even number and odd number?
var a1 = [1,2,3];
var a2 = [1,2,3];
console.log(a1==a2);    // Returns false
console.log(JSON.stringify(a1)===JSON.stringify(a2));// Return True
10)with out pack.json we will forgot pass to git reposierty what git ignore?
11)react bob?
12)what is react fragment? manam yaedito collumns ni add chesynapudu extract <div> tags anavi mana dom lo add aipotay so ala kakunda undataniki <React.Fragement>
13)let a=10, let b=20 how to swaming both valuse?

14)let a=[1,2,3,4,5] num = 10; so i want to matching two valuse of sum and display two valuse of array?
15)NaN === NaN
16)var users = [{name:"satish",course:"C++",score:80},{name:"satish",course:"java",score:65},{name:"chandan",course:"c",score:85}]
17)find the duplicate and add two score valus?
18)sum of total score above array?
19)mongo db aggrigations?
20)how to upload image on mongodb?
21)what is sigle page application?
22)Javascript is single tride or multitride?
23)Do you know SPA?
24)what is react fragement?
25)what is clouser?
26)what is HOC main advance?
27)what is usememo()?
28)How many type of object declarations?
29)How to descture and what is the use of example?
30)immediately invoked function in react?
It is a JavaScript function that runs as soon as it defined. An IIFE (Immediately Invoked Function Expression) can be used for avoiding the variable hoisting from within the blocks. It allows the public access to methods while retaining the privacy for variables defined in the function.

31)Node js Middleware how many ways?
32)Deep copy and shallow copy
33)What is node js fork()?
34)what is google v8 engine why its used? its much faster and v8 engine is javascript convert mechine lerning code.
35)what is process.nextTick() and setImmediate() difference?
36)what is exit function in node js?
37)what is node js concurency?
38)How many ways prop-types?
import PropTypes from 'prop-types';
	foo: PropTypes.string.isRequired,
	bar: PropTypes.number,
	baz: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }))
39)How many ways pass the middleware in node js?
There are five types of middleware in Node js - Application-level, Router-level, Third-party, Build-in type, and Error-handling middleware.
Application level middleware  - app.use
Router level middleware   - router.use
Built-in middleware - express.static,express.json,express.urlencoded
Error handling middleware -  app.use(err,req,res,next)
Thirdparty middleware - bodyparser,cookieparser
40)How you handle it multiple request with out node js ques is noting but one box but i want to 40000 request in time multiple servers?(using docker exp)?
41)Write the node js simple json response display in using express?
42)Why need package.json and package.lock.json?
43)what is different between slice and splice?
The slice() method can be used to create a copy of an array or return a portion of an array. It is important to note that the slice() method does not 
alter the original array but instead creates a shallow copy. Unlike the slice() method, the splice() method will change the contents of the original array.
44)props drilling?
45)jwt reference token?
46)what is vewel?
47)how to convert ts file javascript?
48)what is generator function?
To create a generator, you need to first define a generator function with function* symbol. The objects of generator functions are called generators.

 
  



	  
	  
