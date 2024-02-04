
$(document).ready(function () {
    console.log("hello js");

    $("body").attr("class", "white-text");

    $("#header").load("/pages/master.html header");
    $("#footer").load("/pages/master.html footer");

    // inject bootstrap at bottom of body
    $("footer").after("<!-- bootstrap --> <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js\" integrity=\"sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL\" crossorigin=\"anonymous\"></script>");
});
