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


/*-----------chart data---------------------*/
let chartData = [];

let fetchSurveyData = async () => {
  let data = await fetch('http://localhost:3000/survey/show.json') 
  let parsedData = await data.json()
  return chartData.push(parsedData.data) /* let not needed b/c overriding data */
  
};

fetchSurveyData()

if (chartData !== []) {

  console.log(chartData.forEach(survey => survey))
}

//check if it exist
if (document.getElementById('myChart')){
let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
  type: 'bar', /* changes the chart type */
  data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
      }]
  },
  options: {
      scales: {
          y: {
              beginAtZero: true
          }
      }
  }
});
}; 


