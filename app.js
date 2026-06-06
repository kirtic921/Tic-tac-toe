let boxes=document.querySelectorAll(".box");
// boxes here become array

let resetButton=document.querySelector("#resetButton");
let newButton=document.querySelector("#newButton");
let msgContainer = document.querySelector(".win-mssg");
let msg = document.querySelector("#mssg");

let count=0;
let turnO=true; 



let win = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];


const resetGame = () => {
    let turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}


boxes.forEach((box) => {
    
    box.addEventListener("click", () => {
        count=count+1;
        if(turnO===true){
            box.innerHTML = "O";
            turnO=false;
        }else{
            box.innerHTML = "X";
            turnO=true;
        };
        box.disabled=true;

        checkWinner(count);
    });
});


const disableBoxes = () => {
    for(let box of boxes){
        box.disabled=true;
    }
}


const enableBoxes = () => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText = "";
    }
}


const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}


const showDraw = () => {
    msg.innerText = `Try again! The Game is Draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}


const checkWinner = (count) => {
    for(let p of win){
        // p[i] represents first, second and third positions for each winning pattern array - predefined pattern
        // console.log(p[0], p[1], p[2]);

        // through boxes[p[i]] we can access the the positions for the "boxes" array - user entry
        let pos1Val = boxes[p[0]].innerText;
        let pos2Val = boxes[p[1]].innerText;
        let pos3Val = boxes[p[2]].innerText;


        if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
            if(pos1Val===pos2Val && pos1Val===pos3Val){
                showWinner(pos1Val);
            }else if(count===9){
            showDraw();
            };
        };

    };
};

newButton.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetGame);