//business logic
function Player(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
}
var turn =0
var currentTurn = 0
var newTotal = new Total();
var newHold = new Current();
var player2hold = new Current();
var player2total = new Total();
var currentHold = 0

var dice = {
  sides: 6,
  roll: function () {
    var randomNumber =
    Math.floor(Math.random() * this.sides)
    +1;
    if (randomNumber === 1){
      currentHold = 0

    }
    else {
      currentHold = currentHold + randomNumber;
    }
    return randomNumber;
  }
}
function Total() {
  this.current = 0;
}
function Current() {
  this.currentHold = 0;
}
Total.prototype.totalHold = function(){
  this.current += currentHold;
  turn++
  turnTracker()
}
function turnTracker(){
  if(turn % 2 === 0){
    currentTurn ++
  }
}
//user interface
$(document).ready(function(){
//player1
  $("form#namebutton").submit(function (event) {
    event.preventDefault();
    var player1input = $("input#player1").val();
    var player2input = $("input#player2").val();
    var newPlayer = new Player(player1input, player2input)
    $("#name h2").text(newPlayer.player1);
  });
  $("form#lucky").submit(function(event) {
    event.preventDefault();
    $("#rolls").text(dice.roll());
    $("#hold").text(currentHold);
    if(currentHold ===0){
      $("form#form-hold").submit();
    }
    $("#turnCounter").text(currentTurn)
  });
  $("form#form-hold").submit(function(event) {
    event.preventDefault();
    newTotal.totalHold();
    $("#total").text(newTotal.current);
    currentHold = 0;
    $("#hold").text(currentHold);
    $("#turnCounter").text(currentTurn)
    $("form#form-hold").toggle();
    $("form#form-hold1").toggle();
    $("form#lucky").toggle();
    $("form#lucky1").toggle();
  });
//player2
$("form#namebutton1").submit(function (event) {
  event.preventDefault();
  var player1input = $("input#player1").val();
  var player2input = $("input#player2").val();
  var newPlayer = new Player(player1input, player2input)
  $("#name1 h2").text(newPlayer.player2);
});
  $("form#lucky1").submit(function(event) {
    event.preventDefault();
    $("#rolls1").text(dice.roll());
    $("#hold1").text(currentHold);
    if(currentHold ===0){
      $("form#form-hold1").submit();
    }
    $("#turnCounter").text(currentTurn)
  });
  $("form#form-hold1").submit(function(event) {
    event.preventDefault();
    player2total.totalHold();
    $("#total1").text(player2total.current);
    currentHold = 0;
    $("#hold1").text(currentHold);
    $("#turnCounter").text(currentTurn)
    $("form#form-hold").toggle();
    $("form#form-hold1").toggle();
    $("form#lucky").toggle();
    $("form#lucky1").toggle();
  });
});
