var game = {
  player1: {marker: "🍷"},
  player2: {marker: "💩"}
};

var currentPlayer = game.player1;
var $squares = $('.square');

$squares.on('click', playTurn)

function playTurn() {
  $(this).text(currentPlayer.marker) //why did text work and .val didn't?
  $(this).off('click', playTurn)
  checkWinner()
};

function switchTurns() {
  if(currentPlayer == game.player1) {
    currentPlayer = game.player2
  } else {
    currentPlayer = game.player1
  }
}

function checkWinner() {
  var matchRow1 = ($squares.eq(0).text() == currentPlayer.marker && $squares.eq(1).text() == currentPlayer.marker && $squares.eq(2).text() == currentPlayer.marker)
  var matchRow2 = ($squares.eq(3).text() == currentPlayer.marker && $squares.eq(4).text() == currentPlayer.marker && $squares.eq(5).text() == currentPlayer.marker)
  var matchRow3 = ($squares.eq(6).text() == currentPlayer.marker && $squares.eq(7).text() == currentPlayer.marker && $squares.eq(8).text() == currentPlayer.marker)
  var matchcolumn1 = ($squares.eq(0).text() == currentPlayer.marker && $squares.eq(3).text() == currentPlayer.marker && $squares.eq(6).text() == currentPlayer.marker)
  var matchcolumn2 = ($squares.eq(1).text() == currentPlayer.marker && $squares.eq(4).text() == currentPlayer.marker && $squares.eq(7).text() == currentPlayer.marker)
  var matchcolumn3 = ($squares.eq(2).text() == currentPlayer.marker && $squares.eq(5).text() == currentPlayer.marker && $squares.eq(8).text() == currentPlayer.marker)
  var matchDiagnal1 = ($squares.eq(0).text() == currentPlayer.marker && $squares.eq(4).text() == currentPlayer.marker && $squares.eq(8).text() == currentPlayer.marker)
  var matchDiagnal2 = ($squares.eq(6).text() == currentPlayer.marker && $squares.eq(4).text() == currentPlayer.marker && $squares.eq(2).text() == currentPlayer.marker)

  if(matchRow1 || matchRow2 || matchRow3 || matchcolumn1 || matchcolumn2 || matchcolumn3 || matchDiagnal1 || matchDiagnal2) {
    setTimeout(function() {alert(currentPlayer.marker + "Is The Winner!")}, 500)
      $squares.off('click', playTurn)
    }
  else {
    switchTurns()
  }
}
