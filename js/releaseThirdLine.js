var countryInput = document.getElementById("countryInput");
var cityInput = document.getElementById("cityInput");
var dateInput = document.getElementById("dateInput");
var thirdLine = document.getElementsByClassName("third-line")[0];
firstFlag = false;
secondFlag = false;
thirdFlag = false;
function releaseThirdLine(fflag, sflag, tflag) {
    if(fflag&&sflag&&tflag){
        thirdLine.classList.remove("hidden");
    }
    else{
        thirdLine.classList.add("hidden");
    }
}

countryInput.addEventListener('input', (e)=>{
    if(e.target.value.length > 0){
        countryInput.classList.add("input-focus");
        firstFlag = true;
    }
    else{
        firstFlag = false;
        countryInput.classList.remove("input-focus");
    }
    releaseThirdLine(firstFlag, secondFlag, thirdFlag);
});

cityInput.addEventListener('input', (e)=>{
    if(e.target.value.length > 0){
        cityInput.classList.add("input-focus");
        secondFlag = true;
    }
    else{
        secondFlag = false;
        cityInput.classList.remove("input-focus");
    }
    releaseThirdLine(firstFlag, secondFlag, thirdFlag);
});

dateInput .addEventListener('input', (e)=>{
    if(e.target.value.length > 0){
        dateInput .classList.add("input-focus");
        thirdFlag = true;
    }
    else{
        thirdFlag = false;
        dateInput .classList.remove("input-focus");
    }
    releaseThirdLine(firstFlag, secondFlag, thirdFlag);
});