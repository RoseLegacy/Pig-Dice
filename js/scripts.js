var diceRoll = function() {
  return Math.floor(Math.random() * 6) + 1;

}
var roundScore = 0;
//
// var playRound = function(player) {
//   var roundScore = 0;
//   var continueRound = true;
//   do {
//     var roll = diceRoll();
//     alert(roll);
//     if (roll === 1) {
//       roundScore = 0;
//       continueRound = false;
//     } else {
//       // var hold = confirm("Hold");
//       $("#hold").submit(function() {
//         var hold = true;
//       });
//       roundScore += roll;
//       if (hold) {
//         continueRound = false;
//         player.score += roundScore;
//       }
//     }
//   } while (continueRound)
// }
// //
//
//

var Player = function() {
  this.score = 0;
}

var player1 = new Player();
var player2 = new Player();



//var roll = diceRoll();
var playRound = function(player, roll) {
  if (roll === 1) {
    roundScore = 0;
  } else {
    roundScore += roll;
  }
}

$(function() {

  $(".rollHold").hide();

  $("#1player").click(function() {
    $(".output-stream").text("no");
  });

  $("#2player").click(function() {
    $(".rollHold").show();
    $(".players").hide();
  });

  $("#roll").click(function() {
    var currentRoll = diceRoll();
    console.log(currentRoll);
    playRound(player1, currentRoll);
    $(".output-stream").text(roundScore);
    if (currentRoll === 1) {
      $("#roll").hide();
    }
  });
});
$(function() {
  $("#hold").click(function() {
    player1.score += roundScore;
    $(".output-stream").text(player1.score);
  });
});









//
// var Player = function() {
//   this.score = 0;
// }
//
// var player1 = new Player();
// var player2 = new Player();
//
// do {
//   alert("player 1 tyrn");
//   playRound(player1);
//   alert("player 1 current score is " + player1.score);
//
//   if (player1.score >= 100) {
//     alert("player 1 is the wonner");
//     break;
//   }
//   alert("player 2 tyrn");
//   playRound(player2);
//   alert("player 2 current score is " + player2.score);
//
//   if (player2.score >= 100) {
//     alert("player 2 is the wonner");
//     break;
//   }
//
// } while (player1.score < 100)
