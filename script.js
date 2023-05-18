var menu= document.getElementById("menu");

function toggle(){
    if(menu.classList.contains("active")){
        menu.classList.remove("active")
    }
    else{
        menu.classList.add("active")

    }
 }
