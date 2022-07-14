const english = document.querySelector('.english');
const coreMaths = document.querySelector('.core-maths');
const science = document.querySelector('.science');
const social = document.querySelector('.social');
const eMaths = document.querySelector('.e-maths');
const physics = document.querySelector('.physics');
const chemistry = document.querySelector('.chemistry');
const biology = document.querySelector('.biology');

//const subject = document.querySelectorAll('#subject');
const calcButton = document.querySelector('#calculate');
const aggregate = document.querySelector('#aggregate');

//click event for adding values of grades
calcButton.addEventListener('click', () => {
     gradeValue
});



//Functions

//function to retrieve the value of a selected option
function gradeValue(subject){
     let num = subject.options[subject.selectedIndex].value;
     return num;
}

function sumCore(arr){
     let sum = 0;
     arr.forEach(element => {
          
     });
}