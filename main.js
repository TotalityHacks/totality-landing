$(".firstFade").delay(1000).animate({ opacity: 1 }, 1500);
$(".secondFade").delay(1750).animate({ opacity: 1 }, 1500);
$(".thirdFade").delay(2000).animate({ opacity: 1 }, 1500);

$("#submitEmail").click(function() {
    $.post(
        "https://whispering-waters-46499.herokuapp.com/",
        {"email": $("#emailInput").val()},
        function(resp) {
            $("#emailForm").html("<br>Thank you. We'll keep you posted.");
        },
    ).fail(function() {
        $("#emailForm").html("<br>Hmm. The email submission didn't work. Try again later.");
    });
});
