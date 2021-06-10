const { v4:uuid } = require('uuid'); 

  
 const data = [
   {_id: uuid(),  
    "organization": "Brigham and Women's Hospital",
    "program": "Medical Careers Exploration Program",
    "location": "Longwood Medical Center",
    "activity": "volunteer work",
    "highlight": "shadowing the attending",
    "synopsis": "This program allows students to experience different aspects of medicine and help assist patients around the hospital. There are three different phases and the last part of this experience assigns you one day of shawdowing on an in-patient wing of the hospital. Checkout the link to apply.",
    "image": "stethoscope.jpeg",
    "link": "https://www.brighamandwomens.org/about-bwh/volunteer/medical-career-exploration-program-overview "
  },{_id: uuid(),  
    "organization": "Harvard Medical School",
    "program": "Biomedical Science Careers Program",
    "location": "Longwood Medical Center",
    "activity": "mentoring/conferences",
    "highlight": "networking",
    "synopsis": "This program is desinged to help students learn about the different career options avaialble in the sciences. There are conferences to attend with the goal of networking with scientists and doctors who are exceling in their field. It is motivational and supports students who need guidence in STEM careers.",
    "image": "heart-small.jpeg",
    "link":"https://www.bscp.org"
  },{_id: uuid(),  
    "organization": "Harvard Extention School",
    "program": " Postbaccalaureate Premedical Program",
    "location": "Cambridge",
    "activity": "academic enrichment",
    "highlight": "pre-med classes ",
    "synopsis": "If you need to improve your academic record, take classes at Harvard Extension School. The classes are rigorous but they will prepare you for the MCAT, the medical school extrance exam. At this program you can complete your pre-med requirements, meet supportive students and learn what will be needed for the MCAT.",
    "image": "transparent-skull.jpeg",
    "link":"https://extension.harvard.edu/academics/programs/premedical-program/"
  },{_id: uuid(),  
    "organization": "University of Massachusetts",
    "program": "pre-medical enrichment program",
    "location": "Boston",
    "activity": "academic enrichment/research",
    "highlight": "great research mentors",
    "synopsis": "Students can take courses at Umass Boston to improve their academic record. There are multiple labs to help students learn different research techniques and support them as they develop in their careers. There are opportunities to network and connect with hospitals to gain clinical experience in Boston.",
    "image": "research-lab.jpeg",
    "link":"https://www.umb.edu/academics/csm/student_success_center/pre-med/premedical_enrichment_programs#panel2"
  },

  ];

  module.exports = data;