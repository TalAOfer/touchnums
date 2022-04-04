'use strict'

var gNums = []
var gDifficulty = null

var easy = 16
var hard = 25
var extreme = 36

var lastClick = null

// function getCloneBoard(board) {
//     var cloneBoard = board.slice()
//     // console.log(cloneBoard)
// }

function createNums(difficulty) {
    var nums = []
    for (var i = 0; i < difficulty; i++) {
        nums.push(i + 1)
    }

    shuffle(nums)

    // console.log(nums)
    return nums
}

function renderBoard(difficulty, nums) {
    var strHTML = ''
    for (var i = 0; i < Math.sqrt(difficulty); i++) {
        strHTML += '<tr>'
        for (var j = 0; j < Math.sqrt(difficulty); j++) {
            strHTML += `<td onclick="cellClicked(this)"> ${nums.pop()} </td>`
        }
        strHTML += '</tr>'
    }
    var elTable = document.querySelector('tbody')
    elTable.innerHTML = strHTML
}


function easyBoard() {
    lastClick = null
    resetTimer()
    gDifficulty = easy
    var nums = createNums(easy)
    renderBoard(easy, nums)
}

function hardBoard() {
    lastClick = null
    resetTimer()
    gDifficulty = hard
    var nums = createNums(hard)
    renderBoard(hard, nums)
}

function extremeBoard() {
    lastClick = null
    resetTimer()
    gDifficulty = extreme
    var nums = createNums(extreme)
    renderBoard(extreme, nums)
}

function startClock () {
    interval = window.setInterval(stopWatch, 1);
}

function stopClock () {
    window.clearInterval(interval);
}


function cellClicked(clickedNum) {
    var num = +clickedNum.innerText
    var elCell = clickedNum
    if (!lastClick && num === 1) {
        elCell.classList.add("dead")
        startClock()
        lastClick = num
    }
    if (lastClick && num === lastClick + 1) {
        elCell.classList.add("dead")
        lastClick = num
    }
    if (lastClick === gDifficulty) {
        stopClock()
        lastClick = null
    }
}



