var nameInput = document.querySelector('#nameInput');
var femaleButton = document.getElementsByClassName('gender-female')[0];
var maleButton = document.getElementsByClassName('gender-male')[0];
var genderChoiser = document.getElementsByClassName('gender-choiser')[0];
var secondLine = document.getElementsByClassName('second-line')[0];
var firstFlag = false;
var secondFlag = false;
nameInput.addEventListener('input', (e)=>{
    if(e.target.value.length > 0){
        nameInput.classList.add("input-focus");
        firstFlag = true;
    }
    else{
        firstFlag = false;
        nameInput.classList.remove("input-focus");
    }
    releaseSecondLine(firstFlag, secondFlag);
});
femaleButton.addEventListener("click", ()=>{
    genderChoiser.classList.add("input-focus");
    secondFlag = true;
    releaseSecondLine(firstFlag, secondFlag);
});
maleButton.addEventListener("click", ()=>{
    genderChoiser.classList.add("input-focus");
    secondFlag = true;
    releaseSecondLine(firstFlag, secondFlag);
});

function releaseSecondLine(fflag, sflag) {
    if(fflag&&sflag){
        secondLine.classList.remove("hidden");
    }
    else{
        secondLine.classList.add("hidden");
    }
}