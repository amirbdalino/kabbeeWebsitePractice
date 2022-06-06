var navbar = document.getElementById("navbar");
var menu = document.getElementById("menu");

window.onscroll = function() {
    //write the condition
    if(window.pageYOffset >= menu.offsetTop){
        navbar.classList.add("sticky");
    }
    else{
        navbar.classList.remove("sticky");
    }
}