$(document).ready(function(){

    
    $("#default_option").click(function(){
      $("#dropdown ul").addClass("active");
    });

    $("#dropdown ul li").click(function(){
      var text = $(this).text();
      $("#default_option").text(text);
      $("#dropdown ul").removeClass("active");
    });
    $("#search-en").on('input', function () {
        var word = $("#search-en").val().toLowerCase();
        var wordEn = $("#filter-type-en").val().toLowerCase();

        if (wordEn == "City") {
            var wordFilter = $("#filter").val().toLowerCase();
            $(".searech-h").filter(function () {
                if ($(this).find(".job-mame").text().toLowerCase().indexOf(word) > -1 && $(this).find(".city").text().toLowerCase().indexOf(wordFilter) > -1) {
                    $(this).css("display", "block");
                } else {
                    $(this).css("display", "none");
                }

            })
        } else if (wordEn == "company" || wordAR == "الشركة") {
            var wordFilter = $("#filter").val().toLowerCase();
            $(".searech-h").filter(function () {
                if ($(this).find(".job-mame").text().toLowerCase().indexOf(word) > -1 && $(this).find(".com-name").text().toLowerCase().indexOf(wordFilter) > -1) {
                    $(this).css("display", "block");
                } else {
                    $(this).css("display", "none");
                }

            })
});
$(document).ready(function(){
    $("#filter").click(function(){
      $("#dropdown2 ul").addClass("active");
    });

    $("#dropdown2 ul li").click(function(){
      var text = $(this).text();
      $("#filter").text(text);
      $("#dropdown2 ul").removeClass("active");
    });
});