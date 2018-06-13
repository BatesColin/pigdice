//business logic
/*function Players(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
}*/
var newTotal = new Total();
var newHold = new Current();
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
function Total1() {
  this.current = 0;
}
function Current() {
  this.currentHold = 0;
}
Total.prototype.totalHold = function(){
  this.current += currentHold;
}
Total.prototype.clone = function(){
  this.current += currentHold;
}


//user interface
$(document).ready(function(){
//player1
  $("form#lucky").submit(function(event) {
    event.preventDefault();
    $("#rolls").text(dice.roll());
    $("#hold").text(currentHold);
  });

  $("form#form-hold").submit(function(event) {
    event.preventDefault();
    newTotal.totalHold();
    $("#total").text(newTotal.current);
    currentHold = 0;
    $("#hold").text(currentHold);
  });
//player2
  $("form#lucky1").submit(function(event) {
    event.preventDefault();
    $("#rolls1").text(dice.roll());
    $("#hold1").text(currentHold);
  });

  $("form#form-hold1").submit(function(event) {
    event.preventDefault();
    newTotal1.clone();
    $("#total1").text(newTotal1.current);
    currentHold = 0;
    $("#hold1").text(currentHold);
  });


  $("#winner").show();
  $("#winner").text()


});
