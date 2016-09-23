$(function(){
$(".numberRow").on("click", function () {
var text = $(this).text();
        var number = parseInt(text);
        number = number * number;
        $(this).text(number + "");
        });

});
 