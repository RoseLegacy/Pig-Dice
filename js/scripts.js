var diceRoll = function() {
  return Math.floor(Math.random() * 6) + 1;

}
var roundScore = 0;
var roundLog = [];
var Player = function() {
  this.score = 0;
}

var player1 = new Player();
var player2 = new Player();

// var checkToHold = function() {
//   if (roundScore < 20 || roundScore + )
// }

//var roll = diceRoll();
var playRound = function(player, roll) {
  if (roll === 1) {
    roundScore = 0;
  } else {
    roundScore += roll;
  }
}

$(function() {

  $(".rollHoldPlayer1").hide();
  $(".rollHoldPlayer2").hide();
  $(".scores").hide();


  $("#1player").click(function() {
    $(".output-stream").text("no");
  });

  $("#2player").click(function() {
    $(".scores").show();
    $(".rollHoldPlayer2").hide();
    $(".rollHoldPlayer1").show();
    $(".players").hide();
  });


  //two player section
  $("#roll1").click(function() {
    var currentRoll = diceRoll();
    roundLog.push(currentRoll);

    playRound(player1, currentRoll);
    $(".output-stream").text(roundScore);
    if (currentRoll === 1) {
      $("#roll1").hide();
    }
  });
  $("#roll2").click(function() {
    var currentRoll = diceRoll();
    playRound(player2, currentRoll);
    $(".output-stream").text(roundScore);
    if (currentRoll === 1) {
      $("#roll2").hide();
    }
  });
});
$(function() {
  $("#hold1").click(function() {
    player1.score += roundScore;
    roundScore = 0;
    $(".rollHoldPlayer1").hide();
    $(".rollHoldPlayer2").show();
    $("#roll2").show();
    $(".output-stream").text(roundScore);
    $("#player1-score").text(player1.score);
    if (player1.score >= 100) {
      $(".scores").hide();
      $(".output-stream").text("");
      $(".output-stream").append("<h1>Player 1 is the wonner</h1>");
    }
  });
  $("#hold2").click(function() {
    player2.score += roundScore;
    roundScore = 0;
    $(".rollHoldPlayer1").show();
    $("#roll1").show();
    $(".rollHoldPlayer2").hide();
    $(".output-stream").text(roundScore);
    $("#player2-score").text(player2.score);
    if (player2.score >= 100) {
      $(".scores").hide();
      $(".output-stream").text("");
      $(".output-stream").append("<h1>Player 2 is the wonner</h1>");

    }
  });
});
