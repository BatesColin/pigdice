//business logic
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
function total(currentHold) {
  this.currentHold = currentHold;

}
/*total.prototype.totalhold = function(currentHold){
  this.currentHold + .total
}*/


//user interface
$(document).ready(function(){
  $("form#lucky").submit(function(event) {
    event.preventDefault();
    $("#rolls").text(dice.roll());
    $("#hold").text(currentHold);
    newTotal = new total (currentHold)
      });
  $("form#form-hold").submit(function(event) {
    event.preventDefault();
    $("#total").text(currentHold);
  });
});
