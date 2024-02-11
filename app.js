let userScore=0;
let computerScore=0;

let choices=document.querySelectorAll(".choice");
let message=document.querySelector("#msg");

let users=document.querySelector("#user-score");
let computers=document.querySelector("#computer-score");

const generateComputerChoice=()=>{
    let options=["rock","paper","scissors"];
    let randIndex=Math.floor(Math.random()*3);
    return options[randIndex];
}
const draw=()=>{
    console.log("Match draw");
    message.innerText="It's a Draw";
    message.style.backgroundColor="#081b31";

}
const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        users.innerText=userScore;
        message.innerText="You Win";
        message.style.backgroundColor="green";
    }
    else{
        computerScore++;
        computers.innerText=computerScore;
        message.innerText="You Lose";
        message.style.backgroundColor="red";
    }
}

const playGame=(choice)=>{
    console.log(`user choice = ${choice}`);
    let compuChoice=generateComputerChoice();
    console.log(`computer choice = ${compuChoice}`);
    if(choice === compuChoice){
        draw();
    }else{
    let userWin=true;
    if(choice === "rock"){
       userWin=compuChoice==="paper"?false:true;
    }
    else if(choice === "paper"){
       userWin=compuChoice==="scissors"?false:true;
    }
    else{
       userWin=compuChoice==="rock"?false:true;
    }
    showWinner(userWin);
}
}
choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})
