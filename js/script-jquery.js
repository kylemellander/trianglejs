$(document).ready(function(){

  $('form').submit(function(event){

    var a = parseInt($('input#side_a').val());
    var b = parseInt($('input#side_b').val());
    var c = parseInt($('input#side_c').val());
    var triangle = triangleTracker(a, b, c)

    var triangleResult;
    if (triangle === false) {
      triangleResult = "not a"
    } else if (triangle === "scalene") {
      triangleResult = "a scalene"
    } else {
      triangleResult = "an " + triangle
    };

    var results = 'A triangle with the side lengths of ' + a + ', ' + b + ', and ' + c + ' is ' + triangleResult + ' triangle.';

    $("#result").show();
    $("#result").empty();
    $("#result").append(results);
    event.preventDefault();
  });

});
