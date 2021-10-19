console.log("Welcome to Tic Tac Toe Game")
let audioTurn=new Audio("ting.mp3")
let gameover=new Audio("gameover.mp3")
let turn = "X"
let gameStatus=true

const changeTurn=()=>{
    return turn==="X"?"O":"X"
}
let counter=0
const checkWin=()=>{
    let boxtext=document.getElementsByClassName("boxtext")
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]

    ]

    wins.forEach((e)=>{
        if(counter==0){
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText)&&(boxtext[e[0]].innerText===boxtext[e[2]].innerText) && boxtext[e[0]].innerText!==""){
            document.getElementsByClassName("info")[0].innerText=boxtext[e[0]].innerText+" wins"
            boxtext[e[0]].style.color="red"
            boxtext[e[1]].style.color="red"
            boxtext[e[2]].style.color="red"

            
            audioTurn.pause()
            gameover.play()
            gameStatus=false
            document.getElementsByTagName("img")[0].style.width="200px "
            setTimeout(()=>{

                alert("Congratulations "+boxtext[e[0]].innerText +" Wins Game")
                turn=""
            },1000)
            counter=1
        }}
        else{
            boxtext[e[0]].innerText=""
        }
    })
}
let boxes=document.getElementsByClassName("box")

Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext')
    element.addEventListener('click',()=>{
        if(boxtext.innerText===""){
        boxtext.innerText=turn
        turn=changeTurn()
        console.log("Before")
        audioTurn.play()
        console.log("after")
        checkWin();
        if(gameStatus)
        document.getElementsByClassName('info')[0].innerText="Turn For "+turn;}
    })
})

reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext')
    Array.from(boxtexts).forEach(element=>{
    element.innerText=""
    element.style.color="black"
})
    turn="X"
    audioTurn.play()
    counter=0
    document.getElementsByClassName('info')[0].innerText="Turn For "+turn;
    gameStatus=true
    document.getElementsByTagName("img")[0].style.width="0px "
})