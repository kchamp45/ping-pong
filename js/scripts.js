


$(document).ready(function() {
  $("#ping").submit(function(event) {
    event.preventDefault();

    var limit = parseInt($("input#limit").val());
    var diviser = parseInt($("input#diviser").val());
    var result = [];
    var output = "";

    if (limit >= 1) {
      for (var i = 1; i <= limit; i++)
      result.push(i);
      alert(result);
    }
  //   } else {
  //     for (var i = diviser; i <= count; i += diviser) {
  //       result.push(i);
  //   }
  //   }
  //   result.forEach(function(result) {
  //   $(".results").append("<li>" + result + "</li>");
  // });
  //   $(".output").show();
  //   $("#count").hide();


 });
 });
