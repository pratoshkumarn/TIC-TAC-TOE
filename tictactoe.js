var elements=document.getElementById("boxtext");
var turn="X";
function changeTurn(){
    if(turn=="X"){
        return "O";
    }
    else if(turn=="O"){
        return "X";
    }

}
    
function checkwin(){
    let boxtext=document.getElementsByClassName("boxtext");
    let wins=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
    ];
    wins.forEach((e)=>{
        if((boxtext[e[0]].innerText==boxtext[e[1]].innerText)&&(boxtext[e[2]].innerText==boxtext[e[1]].innerText)&&(boxtext[e[0]].innerText!== "")){
            let won=document.querySelector(".info");
            won.innerText=boxtext[e[0]].innerText + " Won!!!";
        }
    })
}

let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach((element) =>{
    let boxtext=element.querySelector(".boxtext");
    element.addEventListener("click",()=>{
        if(boxtext.innerText==""){
            boxtext.innerText=turn;
            turn=changeTurn();
            let msg=document.querySelector(".info");
            msg.innerText=turn+"'s turn" ;
            checkwin();
        }
    })
})