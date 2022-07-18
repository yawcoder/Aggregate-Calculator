const english = document.querySelector('.english');
const coreMaths = document.querySelector('.core-maths');
const science = document.querySelector('.science');
const social = document.querySelector('.social');
const eMaths = document.querySelector('.e-maths');
const physics = document.querySelector('.physics');
const chemistry = document.querySelector('.chemistry');
const biology = document.querySelector('.biology');

const subjectp = document.querySelectorAll('#subject');
const calcButton = document.querySelector('#calculate');
//const aggregate = document.querySelector('#aggregate');
const studentType = document.getElementsByName('student-type');

//click event for adding values of grades
calcButton.addEventListener('click', () => {


     //PROCESS FOR CALCULATING AGGREGATE FOR CORE SUBJECT
     let coreSum
     //functions for pushing values of selected grades to core Array
     let englishGrade = parseInt(gradeValue(english));
     let coreMathsGrade = parseInt(gradeValue(coreMaths));
     let scienceGrade = parseInt(gradeValue(science));
     let socialGrade = parseInt(gradeValue(social));

     //using science for science student and social for non-science student
     for(i=0; i < studentType.length; i++){
          if(studentType[i].checked == 0){
                coreSum = englishGrade + coreMathsGrade + scienceGrade;
          } else {
                coreSum = englishGrade + coreMathsGrade + socialGrade;
          }
     }
     
     //function for sorting core Array in ascending order
     //let sortedCoreArr = coreArr.sort((a,b) => a - b);

     //add first 3 values of sorted core Array
     //let coreSum = sortedCoreArr[0] + sortedCoreArr[1] + sortedCoreArr[2];

     //-----------------------------------------------------------------------
     
     //PROCESS FOR CALCULATING AGGREGATE FOR ELECTIVE SUBJECTS
     let elecArr = [];

     //functions for pushing values of selected grades to elective Array
     elecArr.push(parseInt(gradeValue(eMaths)));
     elecArr.push(parseInt(gradeValue(physics)));
     elecArr.push(parseInt(gradeValue(chemistry)));
     elecArr.push(parseInt(gradeValue(biology)));
     
     //function for sorting elective Array in ascending order
     let sortedElecArr = elecArr.sort((a,b) => a - b);

     //if statement for when 1 elective subject is unavailable
     if(sortedElecArr[0] == 0 && !sortedElecArr[1] == 0){
          
          let elecSum = sortedElecArr[1] + sortedElecArr[2] + sortedElecArr[3];

          let aggregate = coreSum + elecSum;

          console.log(aggregate);
     } 

     //if statement for when 2 or more electives are unavailable
     else if(sortedElecArr[1] === 0){
          console.log("Not enough Electives to calculate Aggregate");
     } else{
          elecSum = sortedElecArr[0] + sortedElecArr[1] + sortedElecArr[2];

          aggregate = coreSum + elecSum;

          console.log(aggregate);

     }
     
     

});





//Functions

//function to retrieve the value of a selected option
function gradeValue(subject){
     let num = subject.options[subject.selectedIndex].value;
     return num;
}