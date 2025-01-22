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






/**********************************/


document.addEventListener("DOMContentLoaded", function (){
    
    let arrow = document.querySelector(".arrow");
    
    window.addEventListener("scroll", function(){
        if(window.scrollY > arrow.offsetHeight){
    
            arrow.classList.add("goup");
    } else{
    
        arrow.classList.remove("goup");
    
    }
    
   
    });
    
    });