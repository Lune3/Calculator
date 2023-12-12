//will call the appropriate function after button press
function buttonInput(){
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click",(e) =>{
            if(checkForError(e.target.textContent)){
                screenUpdater("ERROR");
            }
            else if(e.target.textContent != "AC" && e.target.textContent != "C" && e.target.textContent != "="){
                screenUpdater(e.target.textContent);
                checkSize();
            }
            else if(e.target.textContent === "AC" || e.target.textContent === "C"){
                backSpace(e.target.textContent);
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

let operand1;
let operator;
let operand2;

function main(){
    buttonInput();

}

main();

