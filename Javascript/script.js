//alert('Hello World');
// to clear() console;
//console.log('hello word');
//console.error('this is error');
//console.warn('this is warring');

// var , let , const
//let age = 25;
//console.log(age);

//data types

//string, number, boolen, null, undefined
//const name1 = 'samrawit';
//const age = 26;
//const rating=4.5;
//const isCool =true;
//const x =null;
//let z;
//console.log(typeof z);

// concatenation of string
//const name1 = 'samrawit';
//const age = 26;
//console.log('my name is ' +name1);
//Template strings
//console.log('my name is ${name}');



/*
const s='hello world';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(0,5));
console.log(s.substring(0,5).toUpperCase());
console.log(s.split(''));
console.log(s.split(', '));
*/

/*Arrays-variables that hold multiple values

const numbers_array= new Array (1,2,3,4,5);
console.log(numbers_array);


const fruits=['apple', 'orange', 'pears'];
fruits[3]='grapes'; //used to add 
fruits.push('mangos'); //used to add 
fruits.unshift('strawberry');  //used to add in first
fruits.pop(); //used to delete
console.log(Array.isArray(fruits))//used to now it is an array
console.log(fruits[1]);
console.log(fruits.indexOf('orange'));
console.log(fruits);

*/

/*object literials

const person={
    fname:'samrawit',
    lname:'Anania',
    age:26,
    hobbies: ['music', 'movies', 'sleeping'],
    address:{
        street: 'keren lalay',
        city: 'keren',
        country: 'Eritrea'
    }
}

console.log(person);
console.log(person.address.city);
console.log(person.hobbies[1]);
const {fname , lname} = person;

 */
/*
const todo=[
    {
        id:1,
        text:'take out trash',
        isCompleted: true
    },
    {
        id:2,
        text:'Meeting with boss',
        isCompleted: true
    },
    {
        id:3,
        text:'Dentist appt',
        isCompleted: false
    } 
];
//const todoJSON= JSON.stringify(todo);
//console.log(todoJSON);
*/
//for loop
for(let i=0; i<=10; i++){ //i=i+1
    console.log(i);
}

//while  loop
  let i=0;
  while(i<10){
      console.log(i);
      i++;
  }  
/*
  // foreach , map, filter
  todo.forEach(function(todo){
      console.log(todo.text);
  });

todo.map(function(todo){
      console.log(todo.text);
  });
  todo.filter(function(todo){
    console.log(todo.text);
});
*/

/*
//conditions if else (|| or) (&& and) 
const x= 10;
if(x==10){
    console.log('x is 10');
}else if(x > 10){
    console.log('x is greater than 10')
}
else{
    console.log('x is less than 10');
}
const color= x > 10 ? 'red': 'blue';
console.log(color);
*/
// switch statement
const color='red';
switch(color){
   case 'red':
       console.log('color is red');
       break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red and blue');
}

/*
// function
function addNums(num1 =1, num2 = 2){
    return num1 + num2;
    // console.log(addNums());
}
console.log(addNums(5,5));
console.log(addNums());

// constractor function
function person(fname , lname, dob){
    this.fname=fname;
    this.lname=lname;
}
// Instantiate object
const person1 =new person('john', 'doe');
const person2 =new person('rahel', 'gebre');
console.log(person1);

// class ??
/*
// single and multiple elements selecter 
console.log(document.getElementById('myform'));
const form=document.getElementById('myform');
console.log(form);
//console.log(document.querySelector(h1));
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('container'));

*/
/*
// ul.remove
const ul = document.querySelector('.items');
//ul.remove;
//ul.lastElementChild.remove();
ul.firstElementChild.textContent ='hello';
ul.children[1].innerText='world';
ul.lastElementChild.innerHTML='<h4>hello</h4>';

const btn= document.querySelector('.btn');
btn.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('click');
});
*/

const myform= document.querySelector('#myform');
const name= document.querySelector('#name');
const email= document.querySelector('#email');
const msg= document.querySelector('#msg');
const userlist= document.querySelector('#users');

myform.addEventListener('submit', onsubmit);
 function onsubmit(e){
     e.preventDefault();
    // console.log(name.value);
    if(name.value=='' || email.value==''){
        //alert('pls enter fields');
        msg.classList.add('error');
        msg.innerHTML=('pls enter fields');
        setTimeout(()=> msg.remove(), 3000);
    }
    else{
        //console.log('success');
        const li= document.createElement('li');
        li.appendChild(document.createTextNode(`${name.value} : ${email.value}`));
        userlist.appendChild(li);

        //clear the fields
        name.value='';
        email.value='';
    }
 }
