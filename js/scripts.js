

//user logic begins
$(document).ready(function() {
  $("#ping").submit(function(event) {
    event.preventDefault();

    var userInput = parseInt($("input#limit").val());
    var number = "";
    var outputs = [];

//business logic begins
    if (userInput >= 1) {
      for (var number = 1; number <= userInput; number++) {
          outputs.push(number);
        }
      }
      for (var i = 0; i < outputs.length; i++) {
        if ((outputs[i] % 3 === 0) && (outputs[i] % 5 === 0)) {
        outputs[i] = "ping-pong";
        } else if (outputs[i] % 3 === 0) {
        outputs[i] = "ping";
        } else if (outputs[i] % 5 === 0) {
        outputs[i] = "pong";
        } else {
          outputs[i] = outputs[i];
          // $("#output").text("Please enter a valid number greater than 1.");
        }
      }
      outputs.forEach(function(output){
      $("#finalList").append("<li>" + output + "</li>");
      $("#output").show();
      $("#ping").hide();
    //business logic ends
})
 });
 });
