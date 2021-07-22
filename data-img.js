const { v4:uuid } = require('uuid'); 

  
 const img = [
   {_id: uuid(),  
    
    "image": "stethoscope.jpeg",
    
  },{_id: uuid(),  
    
    "image": "heart-small.jpeg",
    
  },{_id: uuid(),  
    
    "image": "transparent-skull.jpeg",

  },{_id: uuid(),  
   
    "image": "research-lab.jpeg",
  },{_id: uuid(),  
   
    "image": "research-lab.jpeg",
  }

  ];

  module.exports = img;