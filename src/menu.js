// $(".submenu").click(function(){
//   $(this).children("ul").slideToggle(); 
// })

// $("ul").click(function(p){
//     p.stopPropagation();
//   })

var button = document.getElementById("btn-menu");

function showMenu() {
    var menu = document.getElementById("nav");

    if(menu.classList.contains("disable-menu")){
        menu.classList.remove("disable-menu");
        menu.classList.add("enable-menu");
    }
    else{
        menu.classList.remove("enable-menu");
        menu.classList.add("disable-menu");
    }
}

button.addEventListener("click", showMenu);

// Submenu


var submenu = document.getElementById("submenu");

function showSubmenu() {
    var downSubmenu = document.getElementById("itemList");

    if(downSubmenu.classList.contains("hide")){
        downSubmenu.classList.remove("hide");
        downSubmenu.classList.add("show");
    }
    else{
        downSubmenu.classList.remove("show");
        downSubmenu.classList.add("hide");
    }
}

submenu.addEventListener("click", showSubmenu);

