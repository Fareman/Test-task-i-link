var male = document.getElementsByClassName("gender-male");
var female = document.getElementsByClassName("gender-female");
var genderText = document.querySelector('#genderLabel');

flag = true;
isMainFunctionActived = false;
function clickOnBody(){
    if(isMainFunctionActived){
        isMainFunctionActived = false;
        return;
    }
    male[0].classList.add("hidden");
    female[0].classList.add("hidden");
    flag = true;
}
function clickOnGenderChoiser(){
    if(isMainFunctionActived) return;
    isMainFunctionActived = true;
    if(flag){
        male[0].classList.remove("hidden");
        female[0].classList.remove("hidden");
    }
    else{
        male[0].classList.add("hidden");
        female[0].classList.add("hidden");
    }
    flag = !flag;
}

function ClickOnMale(){
    isMainFunctionActived = true;
    genderText.classList.remove("gray-color");
    genderText.innerText = "Male";
    male[0].classList.add("hidden");
    female[0].classList.add("hidden");
    flag = !flag;
}
function ClickOnFemale(){
    isMainFunctionActived = true;
    genderText.classList.remove("gray-color");
    genderText.innerText = "Female";
    male[0].classList.add("hidden");
    female[0].classList.add("hidden");
    flag = !flag;
}
