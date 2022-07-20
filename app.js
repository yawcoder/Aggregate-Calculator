const english = document.querySelector('.english');
const coreMaths = document.querySelector('.core-maths');
const science = document.querySelector('.science');
const social = document.querySelector('.social');
const eMaths = document.querySelector('.e-maths');
const physics = document.querySelector('.physics');
const chemistry = document.querySelector('.chemistry');
const biology = document.querySelector('.biology');

const calcButton = document.querySelector('#calculate');
//const aggregate = document.querySelector('#aggregate');
const studentType = document.getElementsByName('student-type');
//const electives = document.getElementsByName('electives');
const addElectiveBtn = document.getElementById('add-electives');



//function for limiting number of elective selections to just 4
function myfun(){
     let allElectives = document.getElementsByName('elective');
     let newVar = 0;
     let count;
     for(count = 0; count<allElectives.length; count++){
          if(allElectives[count].checked == true){
               newVar += 1;
          }
     }
     if(newVar > 4){
          document.getElementById('notvalid').innerText = "Choose only 4"
          return false;
     }
}



//lines and function for putting selected electives in array
let valueList = document.getElementById('valuelist');
let text = 'you have selected : ';
let listArray = [];

let checkboxes = document.querySelectorAll('.checkbox');

for(let i=0; i < checkboxes.length; i++){
     checkboxes[i].addEventListener('click', () => {
          if(checkboxes[i].checked == true && listArray.length < 4){
               //adding value to array when it is checked
               listArray.push(checkboxes[i].value);
               valueList.innerText = text + listArray.join('/');
          } else {
               //remove value from array when it is unchecked
               listArray = listArray.filter(e => e !== checkboxes[i].value);
               valueList.innerText = text + listArray.join('/');
          }
          console.log(listArray);
     })
}




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
          } else if(studentType[i].checked == 1){
                coreSum = englishGrade + coreMathsGrade + socialGrade;
          } //else 
     }

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