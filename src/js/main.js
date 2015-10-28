$(document).ready(function () {

    $('#empty_text_area_warning').hide();
    $('#ok').hide();

    $('#send_btn').click(function (e) {

        $('#empty_text_area_warning').hide();
        $('#ok').hide();

        e.preventDefault(); // Prevent reloading page when pressing
        if (!$("#text_area").val()) {
            // textarea is empty

            $('#empty_text_area_warning').show();
        }
        else {
            $('#ok').show();
            $("#text_area").val('');
        }
    });


    $("#text_area").on('change keyup paste', function () {
        if (!$("#text_area").val()) {
            // textarea is empty
            $('#send_btn').attr("disabled", true);
        }
        else {
            $('#send_btn').attr("disabled", false);
        }
    });

    // This is a functions that scrolls to #{blah}link
    function goToByScroll(id){
        // Remove "link" from the ID
        id = id.replace("link", "");
        // Scroll
        $('html,body').animate({
                scrollTop: $("#"+id).offset().top},
            'slow');
    }

    $("#mailMe").click(function(e) {
        // Prevent a page reload when a link is pressed
        e.preventDefault();
        // Call the scroll function
        goToByScroll(this.id);
    });


});
