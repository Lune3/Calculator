//will update the display screen after a button press
function buttonInput(){
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click",(e) =>{
            if(e.target.textContent != "AC" && e.target.textContent != "C" && e.target.textContent != "="){
            screenUpdater(e.target.textContent);
            checkSize();
            }
            else if(e.target.textContent === "AC" || e.target.textContent === "C"){
                backSpace(e.target.textContent);
                checkSize();
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

function screenUpdater(userInput){
    let screen = document.querySelector(".userInput");
    screen.textContent = screen.textContent.concat(userInput);
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

function main(){
    buttonInput();

}

main();

