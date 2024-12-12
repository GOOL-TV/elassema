(function($) {
    'use strict';

    $('.xs-newsletter').on('submit', function(e) {
        e.preventDefault();
        $(".xs_mailchimp_submit").text('Wait..');
        var email = $('#xs-newsletter-email', this).val();
        var xs_list_id = $('.xs_list_id', this).val();
        $.ajax({
            url: xs_check_obj.ajaxurl,
            type: 'post',
            data: {
                action: 'user_xs_subscribe_form',
                email: email,
                xs_list_id: xs_list_id,
                xs_security: xs_check_obj.ajax_nonce,
            },
            success: function(response) {
                console.log(response);
                if (response === 'success') {

                    $('.xs_msg').text(response);
                } else {
                    $(".xs_mailchimp_submit").text('Subscribe');
                    $('.xs_msg').text(response);
                }
            },
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                console.log("Error: " + errorThrown);
            }
        });
    });
})(jQuery)