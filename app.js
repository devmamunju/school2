document.addEventListener("DOMContentLoaded", function (){
    
let menubar = document.querySelector(".menubar");

window.addEventListener("scroll", function(){
    if(window.scrollY > menubar.offsetHeight){

        menubar.classList.add("activeSticky");
}else{

    menubar.classList.remove("activeSticky");

}

});

});