$(function () {
    var li = document.getElementById("list").getElementsByTagName("li");
    $(li).filter(function (index) {
        return index % 2 === 0;
    }).css("background-color", "gray");
    
    $(li).each(function (index) {
        var fontsize = $(this).css('font-size');
        var number = parseInt(fontsize);
        var temp = number + index;
        $(this).css("font-size", temp + "px");
    });
});