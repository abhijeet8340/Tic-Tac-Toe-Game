let boxes = document.querySelectorAll('.box')
let resetbtn = document.querySelector('.reset')
let newGamebtn = document.querySelector('.new')
let mgContainer = document.querySelector('.msgContainer')
let winner = document.querySelector('p')
let fname = document.querySelector('h2')

let turnO = true;

const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
];

boxes.forEach((box) =>{
    box.addEventListener('click', () =>{
        if(turnO){
            box.innerText = 'O'
            box.style.color = 'green'
            turnO = false;
        }else{
            box.innerText = 'X'
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    })
});

const resetgame = () => {
    turnO = true;
    enableboxes();
    mgContainer.classList.add('hide');
}

const disableboxes = () => {
    for (let box of boxes){
        box.disabled = true;
    }
}

const enableboxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (Winner) => {
    winner.innerText = `Congratulation ,Winner is Player ${Winner} `
    fname.innerText = `Thanku, Abhijeet Kumaer`
    mgContainer.classList.remove('hide')
    disableboxes();

}

const checkWinner = () =>{ 
    for(let pattern of winPattern){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != '' && pos2val != '' && pos3val != ''){
            if (pos1val === pos2val && pos2val === pos3val){
                console.log("Winner",pos1val)
                showWinner(pos1val);
            }
        }

    }
}

newGamebtn.addEventListener('click', resetgame)
resetbtn.addEventListener('click', resetgame)







