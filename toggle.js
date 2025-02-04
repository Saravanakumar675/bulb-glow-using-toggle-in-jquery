$(document).ready(function () {
    $('#mySingleToggle').click(function (e) {
        e.preventDefault();

        $(this).toggleClass('toggle-on toggle-off').addClass('toggle-moving');


        if ($(this).hasClass('toggle-off')) {
            $('#light-bulb2').css(
                'opacity', '0'
            );
        } else {
            $('#light-bulb2').css(
                'opacity', '1'
            );
        }

        setTimeout(() => {
            $('#mySingleToggle').removeClass('toggle-moving');
        }, 200);
    });
});
