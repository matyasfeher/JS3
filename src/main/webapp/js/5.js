$(function () {
    $("#submitbutton").on("click", function () {
        checkContent();
    });
    
    function checkContent() {
        $("#form").find(":text").each(function () {
            if ($(this).val().length === 0) {
                $(this).val("Please write your name!!  :)");
                $(this).css("color", "red");
            }
        });
    }
    $("#form").find(":text").each(function () {

        $(this).on("change", function () {
            if ($(this).val().length === 0) {
                $("#submitbutton").prop("disabled", true);
            }
            else {
                $("#submitbutton").prop("disabled", false);
            }

        });
    });

});