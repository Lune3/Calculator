//will call the appropriate function after button press
function buttonInput(){
    const buttons = document.querySelectorAll("button");
    let operand1,operator,operand2;
    buttons.forEach((button) => 
    {
        button.addEventListener("click",(e) =>{
            clickAudio();   
            let input = e.target.textContent;
            if(checkForError(input))
            {
                screenUpdater("ERROR");
            }
            else if(input != "AC" && input != "C" && input != "=")
            {
                if(isBinaryOperator(input))
                {
                    operator = input;
                    operand1 = currentDisplay();
                    backSpace("AC");
                }
                else
                {
                    screenUpdater(input);
                    checkSize();
                }
            }
            else if(input === "AC" || input === "C"){
                backSpace(input);
            }
            else if(input === "="){
                operand2 = currentDisplay();
                backSpace("AC");
                if(operand2.charAt(0) === "√")
                {
                    screenUpdater(`${squareRoot(parseInt(operand2.substring(1,operand2.length)))}`);
                }
                else
                {
                    let result = evaluate(parseInt(operand1),operator,parseInt(operand2));
                    if(result === NaN || result === undefined || result === Infinity)
                    {
                        screenUpdater("ERROR");
                    }
                    else
                    {
                        screenUpdater(`${result}`);
                        checkSize();
                }
            }
        }
    })
    });  
}

//Will check for font size on display Screen if it try to get out of the screen this will reduce it
function checkSize(){
    let screen = document.querySelector(".userInput");
    if(screen.offsetWidth > 300){
        let screenCSS = window.getComputedStyle(screen);
        screenFontSize = screenCSS.getPropertyValue("font-size");
        screenFontSize = parseInt(screenFontSize.slice(0,screenFontSize.length - 2));
        screen.style.fontSize = `${screenFontSize - (parseInt(screen.offsetWidth) - 300)}px`;
    }
}

//Updates the display screen
function screenUpdater(userInput){
    let screen = document.querySelector(".userInput");
    if(userInput === "ERROR"){
        screen.textContent = userInput;
    }
    else{
    screen.textContent = screen.textContent.concat(userInput);
    }
}

function currentDisplay(){
    let screen = document.querySelector(".userInput");
    return screen.textContent;
}

function backSpace(userInput){
    let display = document.querySelector(".userInput");
    if(userInput === "AC"){
        display.textContent = "";
        display.style.fontSize = "72px";
    }
    else{
        display.textContent = display.textContent.slice(0,display.textContent.length - 1);
    }
}

function isBinaryOperator(userInput){
    if(userInput === "+" || userInput === "-" || userInput === "×" || userInput === "÷" || userInput === "%"){
        return true;
    }
    return false;
}

function isUnaryOperator(userInput){
    if(userInput === "√") return true;
    return false;
}

function checkForError(userInput){
    let display = document.querySelector(".userInput");
    if(display.textContent === "" && isBinaryOperator(userInput)){
        return true;
    }
    return false;
}

function evaluate(operand1,operator,operand2){
    let result = 0;
    switch (operator){
        case "+":
            result = add(operand1,operand2);
            break;
        case "-":
            result = subtract(operand1,operand2);
            break;
        case "×":
            result = multiply(operand1,operand2);
            break;
        case "÷":
            result = divide(operand1,operand2);
            break;
        case "%":
            result = percent(operand1,operand2);
            break;
    }
    return result;
}

function add(operand1,operand2){
    return operand1 + operand2;
}

function subtract(operand1,operand2){
    return operand1 - operand2;
}

function multiply(operand1,operand2){
    return operand1 * operand2;
}

function divide(operand1,operand2){
    return operand1/operand2;
}

function percent(operand1,operand2){
    return (operand1/operand2) * 100;
}

function squareRoot(operand1){
    return Math.sqrt(operand1);
}

function clickAudio(){
    let audio = new Audio("Sounds/click-button-140881.mp3");
    audio.play();
}

buttonInput();

