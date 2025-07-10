let boxes=document.querySelectorAll(".box");
let restart_button=document.querySelector("#restart");
let new_button=document.querySelector("#new_button");
let msg_container=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnX=true;

const win_patterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const restart = () => {
    turnX=true;
    enableboxes();
    msg_container.classList.add("hide");
    box.style.color="blue";
}

boxes.forEach((box => {
    box.addEventListener("click" ,()=> {
        if (turnX) {
            box.innerText="X";
            box.style.color="blue";
            turnX=false;
        }
        else {
           box.innerText="O";
           box.style.color="#2B2D42";
           turnX=true;
        }
        box.disabled=true;  /* for fixing the value on button */ 
        checkWinner();
    })
}))

const disableboxes = () => {
    for (let x of boxes) {
        x.disabled=true;
    }
}

const enableboxes = () => {
    for (let x of boxes) {
        x.disabled=false;
        x.innerText="";
    }
}

const show_winner = (winner) => {
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msg_container.classList.remove("hide");
    disableboxes();
}

const checkWinner = () => {
    for (let i of win_patterns) {
        let val1 = boxes[i[0]].innerText;
        let val2 = boxes[i[1]].innerText;
        let val3 = boxes[i[2]].innerText;

        if (val1 !== "" && val1 === val2 && val2 === val3) {
            show_winner(val1);
        }
    }
}

new_button.addEventListener("click",restart);
restart_button.addEventListener("click",restart);