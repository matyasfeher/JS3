$(function () {

    function Person(fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
    var p1 = new Person("Matyas", "Feher", 22);
    var p2 = new Person("Gergely", "Balint", 22);
    var p3 = new Person("Mark", "Herczegfalvy", 22);
    var p4 = new Person("Gergely", "Lippai", 22);
    var p5 = new Person("Almos", "Papp", 22);
    var people = [p1, p2, p3, p4, p5];

    function createTable() {

        $(people).each(function () {
            var tr = "<tr>";
            tr += "<td>" + $(this).attr("fname") + "</td>";
            tr += "<td>" + $(this).attr("lname") + "</td>";
            tr += "<td>" + $(this).attr("age") + "</td><tr>";
            $("#tbody").append(tr);
        });

    }
    ;
    createTable();

    var td = document.getElementById("tbody").getElementsByTagName("tr");
    $(td).each(function () {
        $(this).hover(function () {
            $(this).css("font-weight", "bold");
            $(this).css("font-style", "italic");
        },
                function () {
                    $(this).css("font-weight", "");
                    $(this).css("font-style", "");
                });
    });

});