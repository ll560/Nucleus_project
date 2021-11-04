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
document.addEventListener('DOMContentLoaded', event => {
  function createAndMaintainChart(parsedData) {
    console.log('top of createAndMaintain', parsedData);
    let surveyData = [];

    const populateChart = () => {
      let chem = 0;
      let bio = 0;
      let cars = 0;
      let psychology = 0;
      let notKnown = 0;

      parsedData.forEach(survey => {
        if (survey.favorite_section === 'bio_boichem') {
          return (bio += 1);
        } else if (survey.favorite_section === 'chem_phys') {
          return (chem += 1);
        } else if (
          survey.favorite_section === 'critical_analysis_and_reasoning'
        ) {
          return (cars += 1);
        } else if (survey.favorite_section === 'psychology') {
          return (psychology += 1);
        } else {
          return (notKnown += 1);
        }
      });

      return (surveyData = [chem, bio, cars, psychology, notKnown]);
    };

    populateChart();
    console.log({ surveyData });

    //check if it exist
    if (document.getElementById('myChart')) {
      let ctx = document.getElementById('myChart').getContext('2d');
      let myChart = new Chart(ctx, {
        type: 'bar' /* changes the chart type */,
        data: {
          labels: ['Chem', 'Bio', 'Cars', 'Psychology', 'unknown'],
          datasets: [
            {
              label: 'favorite sections',
              data: surveyData,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }

  // init fetches
  const init = async () => {
    let data = await fetch('http://localhost:3000/survey/show.json');
    let parsedData = await data.json();
    console.log(parsedData.data[0]);
    createAndMaintainChart(parsedData.data);
  };
  init();
});
