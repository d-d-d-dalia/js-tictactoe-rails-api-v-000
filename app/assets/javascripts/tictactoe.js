// Code your JavaScript / jQuery solution here

(() =>{
  attachListeners()
})()

const WINNING_COMBOS = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]

var turn = 0

var currentGame = 0

// if turn modulus 2 = 0, it is falsey, and therefore returns right side (X). any odd number % 2 = 1, and so would be truthy, and return left side (O)
var player = () => turn % 2 ? 'O' : 'X'

function updateState(td){
  //debugger;
  $(td).text(player())
}

function setMessage(string) {
  $('#message').text(string)
}

function checkWinner() {
  var board = []
  var winner = false

// same as $('td').text((index, td) => board[index] = td);
  $('td').text(function(index, td){ 
  	board[index] = td
  })

  WINNING_COMBOS.forEach(function(combo) {
    if (board[combo[0]] !== "" && board[combo[0]] === board[combo[1]] && board[combo[1]] === board[combo[2]]) {
      setMessage("Player " + board[combo[0]] + " Won!")
      winner = true
    }
  })
  return winner

  if (!$.text(this) && winner === false) {
    doTurn(this)
  }
}

function doTurn(td) {
  console.log('do turn executed')
  //debugger
  updateState($(this).context)
  turn++
  if (checkWinner()) {
    setMessage("Player " + player() + " Won!")
    resetBoard()
  } else if (turn === 9){
    setMessage("Tie game.")
    resetBoard()
  }
}

function resetBoard(){
  turn = 0
  $('td').empty()
}

function saveGame() {

}


function attachListeners () {
  console.log('hello')
  $(document).on('click','td', doTurn)
}