$(function () {
    var current = null;
    var pictures = document.getElementById("picturediv").getElementsByTagName("img");

    $(pictures).each(function () {
        $(this).on("click", function () {
            if (current === null) {
                current = $(this);
                $(this).css("border", "solid");
                $(this).css("border-color", "green");
            }
            else {
                var beforeSelected = $(current).prev("img").get(0);
                $(this).after($(current));
                $(beforeSelected).after($(this));
                $(current).css("border", "");
                $(current).css("border-color", "");
                if (beforeSelected === this) {
                    $(this).before($(current));
                }
                current = null;
            }
        });
    });


});


