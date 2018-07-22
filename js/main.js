

$("#submitEmail").click(function() {
    document.getElementById("emailForm").submit();
});

$("#emailForm").submit(function() {
    document.getElementById("emailSubmit").innerHTML = "Saving...";
    $.post(
        "https://whispering-waters-46499.herokuapp.com/",
        {"email": $("#emailInput").val()},
        function(resp) {
            $("#emailForm").html("<br>Thank you. We'll keep you posted.");
        },
    ).fail(function() {
        $("#emailForm").html("<br>Hmm. The email submission didn't work. Please reload the page or try again later.");
    });
    return false;
});

$('#faq').find('h3').click(function(e) {
    if ($(this).hasClass('faq-visible')) {
        $(this).removeClass('faq-visible');
        $(this).next().height('0');
    } else {
        $(this).addClass('faq-visible');
        $(this).next().height('auto');
    }
});