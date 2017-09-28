$(".firstFade").delay(1000).animate({ opacity: 1 }, 1500);
$(".secondFade").delay(1750).animate({ opacity: 1 }, 1500);
$(".thirdFade").delay(2000).animate({ opacity: 1 }, 1500);

$("#submitEmail").click(function() {
    $.post(
        "http://localhost:8000/",
        {"email": $("#emailInput").val()},
        function(resp) {
            console.log(resp);
            $("#emailForm").html("<br>Thank you. We'll keep you posted.");
        },
    );
});
