var currentNumberwrapper = document.getElementById("currentNumber")
var currentNumber = 0;

function increment (){
    currentNumber = currentNumber + 1;
    currentNumberwrapper.innerHTML=currentNumber;
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberwrapper.innerHTML=currentNumber;
}
