// dropdown menu
let menuIcon = document.querySelector(".fa-bars");
let menuItems = document.querySelector(".menuItems");
   

    const toggleMenuItems = function(){
    menuItems.classList.toggle("open");
}

menuIcon.addEventListener("click", toggleMenuItems);


//close down menu 

window.onclick = function(event) {
  if (!event.target.matches('.fa-bars')) {
    let dropdowns = document.getElementsByClassName("menuItems");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('open')) {
        openDropdown.classList.remove('open');
      }
    }
  }
}



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



