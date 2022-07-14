const english = document.querySelector('.english');
const coreMaths = document.querySelector('.core-maths');
const science = document.querySelector('.science');
const social = document.querySelector('.social');
const eMaths = document.querySelector('.e-maths');
const physics = document.querySelector('.physics');
const chemistry = document.querySelector('.chemistry');
const biology = document.querySelector('.biology');

const subject = document.querySelectorAll('#subject');
const calcButton = document.querySelector('#calculate');
const aggregate = document.querySelector('#aggregate');

//click event and fucntion for adding values of selected grades
calcButton.addEventListener('click', () => {

     let englishGrade = english.options[english.selectedIndex].value;
     let coreMathsGrade = coreMaths.options[coreMaths.selectedIndex].value;
     let scienceGrade = science.options[science.selectedIndex].value;
     let socialGrade = social.options[social.selectedIndex].value;
     let eMathsGrade = eMaths.options[eMaths.selectedIndex].value;
     let physicsGrade = physics.options[physics.selectedIndex].value;
     let chemistryGrade = chemistry.options[chemistry.selectedIndex].value;
     let biologyGrade = biology.options[biology.selectedIndex].value;

     //console.log(chemistryGrade);

     if(socialGrade < scienceGrade){
          
     }
});