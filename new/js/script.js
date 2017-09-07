$(document).ready(function () {

    $(".item").click(function () {
        $(this).find("ul").toggle();
    });
});