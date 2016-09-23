$(function () {
    $("#firstdiv").on("click", function () {
        $(this).hide();
    });
    $("#seconddiv").hover(
            function () {
                $(this).css({
                    "border-style": "solid",
                    "border-width": "4px"
                });
            });

    $("#thriddiv").on("click", function () {
        $(this).css("font-size", "200%");
    });

});