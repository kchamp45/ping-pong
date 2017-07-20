
//user logic begins
$(document).ready(function() {
  $("#ping").submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($("input#limit").val());
    pong(userInput);
    $("#output").show();
    outputs.forEach(function(output) {
    $("#finalList").append("<li>" + output + "</li>");
    });
  });
  $("#btn").click(function() {
    document.getElementById("ping").reset();
  });
});

//business logic begins
var userInput = 1;
var outputs = [];

function pong(userInput) {
  for (var number = 1; number <= userInput; number++) {
    outputs.push(number);
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
    }
  }
  return outputs;
}
//business logic ends
