 //read document //
     //console.log(document.all);
 // Write in a dom //
 document.all[9].innerHTML ="Hello Enterpreneurs";
 document.all[12].textContent ="Add new Members ";

 //getElementBy ID //
 var headerTitle= document.getElementById("header-title");
 var header = document.getElementById("main");
//console.log(headerTitle);
//headerTitle.textContent = "Hello my groupmates!!"
//headerTitle.innerHTML = "Goodbye my groupmates!!"
headerTitle.style.borderBottom ="solid 3px darkorange";
header.style.borderBottom ="solid 3px darkorange";


 //getElementBy classname //
var items= document.getElementsByClassName("list-group-item");
items[1].style.backgroundColor = "yellow";

 //getElementBy Tagname //
 var items= document.getElementsByTagName("li");
items[3].style.backgroundColor = "yellow";

//queryselector//
//selects only one item on the frist//
 //var header2 = document.querySelector("#items");
//header2.style.border ="solid 4px darkorange";

var lastitem = document.querySelector(".list-group-item:last-child");
lastitem.style.backgroundColor = "yellow";

//queryselectorAll//
//selects more than one item //
var titles = document.querySelectorAll(".title");
var odd = document.querySelectorAll("li:nth-child(odd)");
var even = document.querySelectorAll("li:nth-child(even)");


for(var i = 0; i < odd.length; i++){
      odd[i].style.backgroundColor= "#f4f4f4";
      even[i].style.backgroundColor= "#ccc";

}

// part 2//
var itemList = document.querySelector("#items");
//parentNode//
   //console.log(itemList.parentNode);
itemList.parentNode.parentNode.style.backgroundColor = "#f4f4f4";

//childNode//
itemList.children[0].style.backgroundColor ="#f4f4f4";
itemList.firstElementChild.textContent ="woow";
itemList.lastElementChild.textContent ="Hello 4";

//sibling//
//nextSibling
//previousSibling

//create Element div

var newDiv = document.createElement("div");
//add class and id
newDiv.className = "newdivclass";
newDiv.id = "newdivid";
//create text 
var newDivtext = document.createTextNode("Helloooo");
newDiv.appendChild(newDivtext);
var conatiner = document.querySelector("header .container");
var h1 = document.querySelector("header h1");

//conatiner.insertBefore(newDiv, h1);

//part 3//

//var button = document.getElementById("button").addEventListener("click",buttonclicked);
function buttonclicked(){
    var header2 = document.querySelector("#items");
    header2.style.borderBottom ="solid 4px darkorange";
}

var button2 = document.getElementById("button").addEventListener("click",buttonclicked);

box.addEventListener("mousemove", runEvent);
function runEvent(e){
   var output = document.getElementById("output");
   //output.innerHTML = "Event Type: " +e.type;
   //output.innerHTML = " shift key:" + e.shiftkey;
   //???????
   var box = document.getElementById("box");
   box.style.backgroundColor = "rgb ("+e.offsetX+","+e.offsetY+",40)";
  // document.body.style.backgroundColor = "rgb ("+e.offsetX+","+e.offsetY+",40)";

}

var itemInput = document.querySelector("input[type='text']");
var form = document.querySelector("form");

//itemInput.addEventListener("keydown", runEvent);
//itemInput.addEventListener("keyup", runEvent);
//itemInput.addEventListener("keypress", runEvent);
//itemInput.addEventListener("focus", runEvent);
//itemInput.addEventListener("blur", runEvent);

//itemInput.addEventListener("cut", runEvent);
//itemInput.addEventListener("paste", runEvent);

var select = document.querySelector("select");
select.addEventListener("change",runEvent2);
form.addEventListener("submit",runEvent2);

function runEvent2(e){
    e.preventDefault();
    console.log("Event type: " +e.type);
    console.log(e.type.value);
}























