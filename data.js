const {v4:uuid} = require('uuid'); 

  
  module.exports = [{_id: uuid(),  
    "organization": "Brigham and Women's Hospital",
    "program": "Medical Careers Exploration Program",
    "location": "Longwood Medical Center",
    "activity": "volunteer work",
    "favorite part": "shadowing the attending",
    "rating": 5/5,
    "synopsis": "This program allows students to experience different aspects of medicine and help assist patients around the hospital. There are three different phases and the last part of this experience assigns you one day of shawdowing on an in-patient wing of the hospital. Checkout the link to apply.",
    "image": "hospital-building.jpg",
    "link": "https://www.brighamandwomens.org/about-bwh/volunteer/medical-career-exploration-program-overview "
  },{_id: uuid(),  
    "organization": "Harvard Medical School",
    "program": "Biomedical Science Careers Program",
    "location": "Longwood Medical Center",
    "activity": "mentoring/conferences",
    "favorite part": "networking",
    "rating": 5/5,
    "synopsis": "This program is desinged to help students learn about the different career options avaialble in the sciences. There are conferences to attend with the goal of networking with scientists and doctors who are exceling in their field. It is motivational and supports students who need guidence in STEM careers.",
    "image": "group-study.jpg",
    "link":"https://www.bscp.org"
  },{_id: uuid(),  
    "organization": "Harvard Extention School",
    "program": " Postbaccalaureate Premedical Program",
    "location": "Cambridge",
    "activity": "academic enrichment",
    "favorite part": "pre-med classes ",
    "rating": 5/5,
    "synopsis": "If you need to improve your academic record, take classes at Harvard Extension School. The classes are rigorous but they will prepare you for the MCAT, the medical school extrance exam. At this program you can complete your pre-med requirements, meet supportive students and learn what will be needed for the MCAT.",
    "image": "transparent-skull.jpeg",
    "link":"https://extension.harvard.edu/academics/programs/premedical-program/"
  }
  ]