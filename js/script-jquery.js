$(document).ready(function(){

  $('form').submit(function(event){

    var a = parseInt($('input#side_a').val());
    var b = parseInt($('input#side_b').val());
    var c = parseInt($('input#side_c').val());
    var triangle = triangleTracker(a, b, c)

    var results = 'A triangle with the side lengths of ' + a + ', ' + b + ', and ' + c + ' is a ' + triangle + '.';

    $("#result").show();
    $("#result").text(results)
    event.preventDefault();
  });

});
