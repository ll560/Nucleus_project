let menuIcon = document.querySelector(".fa-bars");
let menuItems = document.querySelector(".menuItems");
    console.log(menuItems)
    console.log(menuIcon)

    const toggleMenuItems = function(){
    menuItems.classList.toggle("open");
}

menuIcon.addEventListener("click", toggleMenuItems);

//-----admissions sidebar open/collapse---------


function openSidebar() {
  document.getElementById("sidebar-all").style.width = "250px";
  document.getElementById("main-button").style.marginRight = "250px";
  document.getElementById("main-button").style.display = "none";
}

function closeSidebar() {
  document.getElementById("sidebar-all").style.width = "0px";
  document.getElementById("main-button").style.marginLeft= "0px";
  document.getElementById("main-button").style.marginRight= "0px";
  document.getElementById("main-button").style.display = "inline";
}
