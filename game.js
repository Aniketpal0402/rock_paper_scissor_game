let user = 0;
let comp = 0;

//function for take user input

let choices = document.querySelectorAll(".choice");

// computer generated values
const compgen = () => {
    let values = ["ROCK", "PAPER", "SCISSOR"];
    let a = Math.floor(Math.random() * 3);
    return values[a];
}
const playgame = (userchoice) => {
    console.log("your choice:", userchoice);
    let computerchoice = compgen();
    console.log("computer choice:", computerchoice);
    document.querySelector("#computerchoice").innerText = "COMPUTER CHOICE WAS " + computerchoice;

    if (userchoice == computerchoice) {
        let text = document.querySelector("#text");
        text.innerText = "GAME TIE! PLAY AGAIN...";
    }
    else if (userchoice === "ROCK") {
        if (computerchoice === "PAPER") {
            comp++;
            text.innerText = "COMPUTER WINS...!";
            document.querySelector("#scorecomp").innerText = comp;
        }
        else {
            user++;
            text.innerText = "YOU WINS...!";
            document.querySelector("#scoreuser").innerText = user;
        }
    }
    else if (userchoice === "PAPER") {
        if (computerchoice === "SCISSOR") {
            comp++;
            text.innerText = "COMPUTER WINS...!";
            document.querySelector("#scorecomp").innerText = comp;
        }
        else {
            user++;
            text.innerText = "YOU WINS...!";
            document.querySelector("#scoreuser").innerText = user;
        }
    }
    else {
        if (computerchoice === "ROCK") {
            comp++;
            text.innerText = "COMPUTER WINS...!";
            document.querySelector("#scorecomp").innerText = comp;
        }
        else {
            user++;
            text.innerText = "YOU WINS...!";
            document.querySelector("#scoreuser").innerText = user;
        }
    }
}
// choice is an parameter of foreachloop
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userchoice = choice.ariaValueText;
        playgame(userchoice);
    });
});



// let userinput;
// function obj1(){
//     userinput=document.querySelector("#obj1").ariaValueText;
//     console.log(userinput);
//     return userinput;
// }


// function obj2(){
//     userinput=document.querySelector("#obj2").ariaValueText;
//     console.log(userinput);
//     return userinput;
// }
// function obj3(){
//      userinput=document.querySelector("#obj3").ariaValueText;
//      console.log(userinput);
//     return userinput;
// }

// console.log(userinput);






