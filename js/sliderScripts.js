var slidedObjects = document.getElementsByClassName("slidedObject");
var sliderPoints = document.getElementsByClassName("point");
var currentSlidedObject = 0;
var nextSlidedObject = 1;
var sliderFlag= false;
function changeSlidedObjectRight(){
    if(sliderFlag) return;
    sliderFlag = true;
    
    if(currentSlidedObject >= slidedObjects.length-1){
        nextSlidedObject = 0;
    }
    else{
        nextSlidedObject = currentSlidedObject+1;
    }
    sliderPoints[currentSlidedObject].classList.remove("point-fill");
    sliderPoints[nextSlidedObject].classList.add("point-fill");
    slidedObjects[nextSlidedObject].classList.add("right-offset");
    slidedObjects[nextSlidedObject].classList.add("slider-transition");
    slidedObjects[nextSlidedObject].classList.add("active");
    setTimeout(function(){
        slidedObjects[nextSlidedObject].classList.remove("right-offset");
        slidedObjects[currentSlidedObject].classList.add("left-offset");
    }, 0)
    
    setTimeout(function(){
        slidedObjects[currentSlidedObject].classList.remove("active");
        slidedObjects[currentSlidedObject].classList.remove("left-offset");
        currentSlidedObject++;
        if(currentSlidedObject >= slidedObjects.length) currentSlidedObject = 0;
        sliderFlag = false;
    }, 600)
}

function changeSlidedObjectLeft(){
    if(sliderFlag) return;
    sliderFlag = true;
    
    if(currentSlidedObject <= 0){
        nextSlidedObject = slidedObjects.length-1;
    }
    else{
        nextSlidedObject = currentSlidedObject-1;
    }
    sliderPoints[currentSlidedObject].classList.remove("point-fill");
    sliderPoints[nextSlidedObject].classList.add("point-fill");
    slidedObjects[nextSlidedObject].classList.add("left-offset");
    slidedObjects[nextSlidedObject].classList.add("slider-transition");
    slidedObjects[nextSlidedObject].classList.add("active");
    setTimeout(function(){
        slidedObjects[nextSlidedObject].classList.remove("left-offset");
        slidedObjects[currentSlidedObject].classList.add("right-offset");
    }, 0)
    
    setTimeout(function(){
        slidedObjects[currentSlidedObject].classList.remove("active");
        slidedObjects[currentSlidedObject].classList.remove("right-offset");
        currentSlidedObject--;
        if(currentSlidedObject < 0) currentSlidedObject = slidedObjects.length-1;
        sliderFlag = false;
    }, 600)
}