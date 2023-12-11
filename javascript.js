//will update the screen value after a button press
function buttonInput(){
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click",(e) =>{
            if(e.target.textContent != "AC" && e.target.textContent != "C" && e.target.textContent != "="){
            screenUpdater(e.target.textContent);
            checkSize();
            }
            else{

            }
        })
    });  
}

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

function main(){
    buttonInput();

}

main();

