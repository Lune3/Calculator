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
        let sizeOfFont = screen.style.fontSize;
        screen.style.fontSize = `${sizeOfFont - (parseInt(screen.offsetWidth) - 300)}px`;
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

