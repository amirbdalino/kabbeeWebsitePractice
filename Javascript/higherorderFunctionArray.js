/*const companies= [
    {name: "cmp 1" , catagory: "Finance", start: 1981, end:200},
    {name: "cmp 2" , catagory: "Finance", start: 1981, end:2003},
    {name: "cmp 3" , catagory: "Finance", start: 1981, end:2003},
    {name: "cmp 4" , catagory: "Finance", start: 1982, end:2003},
    {name: "cmp 5" , catagory: "Finance", start: 1985, end:2008},
    {name: "cmp 6" , catagory: "Finance", start: 1982, end:2003},
    {name: "cmp 7" , catagory: "Finance", start: 1981, end:1982},
    {name: "cmp 8" , catagory: "Finance", start: 1981, end:1982},
    {name: "cmp 9" , catagory: "Finance", start: 1981, end:1982}
];
const age= [12,4,2,34,45,32,36,26,37,29];
//console.log(age[2]);
// forEach loop
for(let i= 0; i< companies.length; i++){
    //console.log(companies[i]);
}
companies.forEach(function(company){
    console.log(company);
    //console.log(company.name);
});

//filter
// get 21 and above
let canDrink= [];
for(let i= 0; i< age.length; i++){
    if(age[i] >= 21){
        canDrink.push(age[i]);
    }
}
//console.log(canDrink);
const canDrinks= age.filter(function(age){
 if(age>=21){
     return true;
 }
})
//const canDrinks= age.filter(age => age>=21);
//console.log(canDrinks);

//get 80s companies
const eightiesCompanies= companies.filter(company => (company.start>=1980 && 
    company.start<1990));

// greater than ten years 
//console.log(eightiesCompanies);
const lasttenyear= companies.filter(company => (company.end-company.start > 10));
//console.log(lasttenyear);    

//Map 
// create array of company names
const companyName= companies.map(function(company){
    return company.name;
});
//console.log(companyName);

const ageSquare= age.map(age => Math.sqrt(age));
//console.log(ageSquare);

//Sort 
const sortCompanies= companies.sort(function(c1,c2){
    if(c1.start > c2.start){
        return 1;
    }else{
        return -1;
    }
});
//console.log(sortCompanies);
// easy to sort copmanys by their start date
const sortCompanies1= companies.sort((a, b) => (a.start > b.start ? 1: -1));
//console.log(sortCompanies1);

// sort ages
const sortages= age.sort((a, b) => (a-b));
//console.log(sortages);

// reduce
let agesum= 0;
for(let i=0; i< age.length; i++){
   agesum += age[i];
}
//console.log(agesum);

const agesums= age.reduce((total, age) => total + age, 0);
//console.log(agesums);

//combine Methods 
const combined= age
.map(age => age * 2)
.filter(age => age >= 40)
.sort((a, b) => (a- b))
.reduce((a, b) => a+ b, 0)
;

//console.log(combined);

*/
//Example the document object
//console.dir(document);
/*
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
//document.title=123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
// document.all[10].textContent = "Hello";
console.log(document.forms);
console.log(document.links);
console.log(document.images);

*/
/*
// Get elemeny by id//
//console.log(document.getElementById("header-title")); 
var headerTitle =document.getElementById("header-title");
console.log(headerTitle);
headerTitle.textContent = "Hello";
headerTitle.innerText = "Goodbye";
headerTitle.innerHTML =" <h3> hello </h3>";
headerTitle.style.borderBottom = "solid 3px #000";
*/
/*
//get element by class name//

var items = document.getElementsByClassName("list-group-item");
console.log(items);
console.log(items[1]);
items[1].textContent = "hello 2";
items[1].style.fontWeight = "bold";
items[1].style.backgroundColor ="yellow";

for(var i =0; i<items.length; i++){
    items[1].style.backgroundColor ="gray"; 
}

//get element by tag name//

var li = document.getElementsByTagName("li");
console.log(li);
console.log(li[1]);
li[1].textContent = "hello 2";
li[1].style.fontWeight = "bold";
li[1].style.backgroundColor ="yellow";
*/
/*
//Queryselector//

var header = document.querySelector("#main-header");
header.style.borderBottom = "solid 4px #ccc";

var input = document.querySelector("input");
input.value = " hello world";

var submit = document.querySelector("input[type = 'submit']");
submit.value =" send";

var item = document.querySelector(".list-group-item");
item.style.color = "red";

var lastitem = document.querySelector(".list-group-item:last-child");
lastitem.style.color = "blue";

var seconditem = document.querySelector(".list-group-item:nth-child(2)");
seconditem.style.color = "yellow";
*/
/*
// get QueryselectorAll //

var titles = document.querySelectorAll(".title");
console.log(titles);
titles[0].textContent = " Hell0";

var odd  = document.querySelectorAll("li:nth-child(odd)");
var even  = document.querySelectorAll("li:nth-child(even)");

 for(var i=o; i< odd.length; i++){
     odd[i].style.backgroundColor = "yellow";
     even[i].style.backgroundColor = "#ccc";

 }
*/

// Second Video //
var itemList = document.querySelector("#items");
 
/*
var itemList = document.querySelector("#items");
//parentNode
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = "red";
console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = "red";
console.log(itemList.parentElement.parentElement.parentElement);


//childNodes
console.log(itemList.childNodes);
//or
console.log(itemList.children);
console.log(itemList.children[2]);
itemList.children[2].style.backgroundColor ="yellow";

//firstChild
console.log(itemList.firstChild);
//firstChildElement
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = "Hello";


//lastChild
console.log(itemList.lastChild);
//firstChildElement
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = "Hello";

//nextsibling //
console.log(itemList.nextSibling);
//nextElementsibling
console.log(itemList.nextElementSibling);

//previoussibling //
console.log(itemList.previousSibling);
//previousElementsibling
console.log(itemList.previousElementSibling);

*/

// createElement
//create a div
var newDiv = document.createElement("div");
//Add class
newDiv.className = "hello" ;
// Add id
newDiv.id = "hello1"
//Create text node
var newDivtext = document.createTextNode("Hello World");
//Add text to div
newDiv.appendChild(newDivtext);

console.log(newDiv);
/*
var button = document.getElementById("button").addEventListener("click",buttonClick);

function buttonClick(e){
    //console.log("changed");
    //document.getElementById("header .title").textContent = "changed";
    //document.querySelector("#main").style.backgroundColor = "Gray";
   console.log(e.target);
   console.log (e.target.id);
   console.log (e.target.clasName);
   console.log(e.target.classList);
   var output = document.getElementById("output");
   output.innerHTML = "h3" +e.target.id + "</h3>";
   console.log(e.type);
   console.log(e.clientX);
   console.log(e.clienty);
   console.log(e.offsetX);
   console.log(e.offsetY);

  console.log(e.altkey);
  console.log(e.ctrlkey);

}
*/
/*
var button = document.getElementById("button").addEventListener("click",runEvent);

function runEvent(e){
    console.log("Event Type :" +e.type);
}

*/






