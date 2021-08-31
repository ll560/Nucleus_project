const axios = require('axios');

const surveyData = [
  {
    title: 'book1',
    months: 13,
    company: 'Khan Academy',
    use_aamc_material: false,
    use_flashcards: false,
    cars: 'vroom vroom',
    favorite_section: 'bio_boichem',
  },
  {
    title: 'book2',
    months: 13,
    company: 'Next Step',
    use_aamc_material: false,
    use_flashcards: true,
    cars: 'vroom vroom',
    favorite_section: 'chem_phys',
  },
  {
    title: 'book3',
    months: 13,
    company: 'Khan Academy',
    use_aamc_material: true,
    use_flashcards: false,
    cars: 'vroom vroom',
    favorite_section: 'critical_analysis_and_reasoning',
  },
  {
    title: 'book1',
    months: 13,
    company: 'Next Step',
    use_aamc_material: true,
    use_flashcards: true,
    cars: 'vroom vroom',
    favorite_section: 'bio_boichem',
  },
  {
    title: 'book1',
    months: 13,
    company: 'Khan Academy',
    use_aamc_material: true,
    use_flashcards: true,
    cars: 'vroom vroom',
    favorite_section: 'chem_phys',
  },
  {
    title: 'book3',
    months: 13,
    company: 'Khan Academy',
    use_aamc_material: true,
    use_flashcards: true,
    cars: 'vroom vroom',
    favorite_section: 'psychology',
  },
  {
    title: 'book6',
    months: 13,
    company: 'Khan Academy',
    use_aamc_material: true,
    use_flashcards: true,
    cars: 'vroom vroom',
    favorite_section: 'psychology',
  },
];

const seedData = async () => {
  await surveyData.forEach(survey =>
    axios.post('http://localhost:3000/survey/', survey)
  );
};

seedData();
// const options = {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(surveyData),
// };
// console.log('hit');
// fetch('http://localhost:3000/survey/show', options);
