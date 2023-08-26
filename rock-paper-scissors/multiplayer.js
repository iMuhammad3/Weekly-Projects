
const buttons = document.querySelectorAll('.scores button')

const rockId = 1
const paperId = 2
const scissorsId = 3

let player1turn = true
let player1score = 0
let player2score = 0
let player1choice
let player2choice


function startGame() {
    player1choice = undefined;
    player2choice = undefined;

    if (player1turn) {
        player1play()
        player1turn = false
        console.log(player1score)
    } else{
        player2play()
        console.log(player2score)
    }

    if (player1choice && player2choice) {
        updateResult();
        buttons.forEach(btn => btn.style.display = 'block')
        player1turn = false; 
    }
}

// player1 functions
function player1btns() {
    let player1btnArray = []
    buttons.forEach(button => {
        if (button.parentElement.parentElement.className == 'player') {
            player1btnArray.push(button)
        }
    })
    return player1btnArray
}
console.log(player1btns())

function player1play() {
    player1btns().forEach(btn => {
        btn.addEventListener('click', () => {
            player1choice = btn.className
            console.log(player1choice)
            player1btns().forEach(btn => btn.style.display = 'none')
        })
    })
}


// player 2 functions
function player2btns() {
    let player2btnArray = []
    buttons.forEach(button => {
        if (button.parentElement.parentElement.className == 'opponent') {
            player2btnArray.push(button)
        }
    })
    return player2btnArray
}
function player2play() {
    player2btns().forEach(btn => {
        btn.addEventListener('click', () => {
            player2choice = btn.className
            console.log(player2choice)
            player2btns().forEach(btn => btn.style.display = 'none')
        })
    })
}

startGame()

// check winner
function updateResult() {
    // if user picks rock and computer paper
    if (player1choice === 'rock' && player2choice === 'paper') player2score++
    // if user picks rock and computer scissors
    if (player1choice === 'rock' && player2choice === 'scissors') player1score++
    // if user picks paper and computer rock
    if (player1choice === 'paper' && player2choice === 'rock') player1score++
    // if user picks paper and computer scissors
    if (player1choice === 'paper' && player2choice === 'scissors') player2score++
    // if user picks scissors and computer rock
    if (player1choice === 'scissors' && player2choice === 'rock') player2score++
    // if user picks scissors and computer paper
    if (player1choice === 'scissors' && player2choice === 'paper') player1score++
}
