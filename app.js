const english = document.querySelector('#english');
const coreMaths = document.querySelector('#core-maths');
const science = document.querySelector('#science');
const social = document.querySelector('#social');
const elec1 = document.querySelector('#elec1');
const elec2 = document.querySelector('#elec2');
const elec3 = document.querySelector('#elec3');
const elec4 = document.querySelector('#elec4');

const calcButton = document.querySelector('#calculate');
const studentType = document.getElementsByName('student-type');
let finalGrade = document.querySelector('#final');
//const electives = document.getElementsByName('electives');
const addElectiveBtn = document.getElementById('add-electives');

 const elecLabel1 = document.getElementById('label1');
 const elecLabel2 = document.getElementById('label2');
 const elecLabel3 = document.getElementById('label3');
 const elecLabel4 = document.getElementById('label4');



//function for limiting number of elective selections to just 4
function myfun(){
     let allElectives = document.getElementsByName('elective');
     let checkedSubjects = 0;
     let count;
     for(count = 0; count<allElectives.length; count++){
          if(allElectives[count].checked == true){
               checkedSubjects += 1;
          }
     }
     if(checkedSubjects > 4){
          document.getElementById('notvalid').innerText = "***Please You Can Choose 4 Electives Only***"
          return false;
     }
}



//lines and function for putting selected electives in array
let valueList = document.getElementById('valuelist');
let text = 'You have selected : ';
let listArray = [];

let checkboxes = document.querySelectorAll('.checkbox');

for(let i=0; i < checkboxes.length; i++){
     checkboxes[i].addEventListener('click', () => {
          if(checkboxes[i].checked == true && listArray.length < 4){
               //adding value to array when it is checked
               listArray.push(checkboxes[i].value);
               valueList.innerText = text + listArray.join(' / ');
          } else {
               //remove value from array when it is unchecked
               listArray = listArray.filter(e => e !== checkboxes[i].value);
               valueList.innerText = text + listArray.join(' / ');
          }
          //console.log(listArray);
     })
}

//click event and function for adding selected electives to calculator
addElectiveBtn.addEventListener('click', () => {

     elecLabel1.innerText = listArray[0] + ":";

     elecLabel2.innerText = listArray[1] + ":";

     elecLabel3.innerText = listArray[2] + ":";

     elecLabel4.innerText = listArray[3] + ":";
})




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
          } 
     }

     //-----------------------------------------------------------------------
     
     //PROCESS FOR CALCULATING AGGREGATE FOR ELECTIVE SUBJECTS
     let elecArr = [];

     //functions for pushing values of selected grades to elective Array
     elecArr.push(parseInt(gradeValue(elec1)));
     elecArr.push(parseInt(gradeValue(elec2)));
     elecArr.push(parseInt(gradeValue(elec3)));
     elecArr.push(parseInt(gradeValue(elec4)));
     
     //function for sorting elective Array in ascending order
     let sortedElecArr = elecArr.sort((a,b) => a - b);

     //if statement for when 1 elective subject is unavailable

     if(sortedElecArr[0] == 0 && !sortedElecArr[1] == 0){
          
          let elecSum = sortedElecArr[1] + sortedElecArr[2] + sortedElecArr[3];

            finalGrade.innerText = coreSum + elecSum;
     } 

     //if statement for when 2 or more electives are unavailable
     else if(sortedElecArr[1] === 0){
          console.log("Not enough Electives to calculate Aggregate");

     //if statement for when there is a D7, E8 or F9 in a core subject
     } else if(englishGrade >= 7 || socialGrade >= 7 || scienceGrade >= 7 || coreMathsGrade >= 7){

          finalGrade.innerText = "diploma";

     } else{
          elecSum = sortedElecArr[0] + sortedElecArr[1] + sortedElecArr[2];

          finalGrade.innerText = coreSum + elecSum;

     }
});





//Functions

//function to retrieve the value of a selected option
function gradeValue(subject){
     let num = subject.options[subject.selectedIndex].value;
     return num;
}