setInterval(function () {
    jQuery('.subject:contains(#1)').parents('.field-item').css('background', '#f3ffe3');
    jQuery('.subject:contains(#2)').parents('.field-item').css('background', '#ffffd1');
    jQuery('.subject:contains(#3)').parents('.field-item').css('background', '#c4faf8');
    jQuery('.subject:contains(#4)').parents('.field-item').css('background', '#fbe4ff');
    jQuery('.subject:contains(#5)').parents('.field-item').css('background', '#ecd4ff');
    
    jQuery('.ticket-appointments').each(function () {
        if (jQuery(this).find('.appointments-header .play-pause-header').length == 0) {
            jQuery(this).find('.appointments-header').prepend('<div class="item play-pause-header">Play/Pause</div>');
        }
        
        if (jQuery(this).find('.ticket-appointments-container .play-pause-content').length == 0) {
            jQuery(this).find('.ticket-appointments-container').prepend('<div class="ticket-appointments-little-container play-pause-content"><div class="mv-input-container time-appointment-date"><button type="button" class="play-time" style="margin-right:10px;padding-top:5px;"><span class="icon-mv-play"></span></button><button type="button" class="pause-time" style="padding-top:5px;"><span class="icon-mv-pause"></span></button></div></div>');
        }
    });
}, 1000);

jQuery('body').on('click', '.play-time', function () {
    let input = jQuery(this).parents('.ticket-appointments').find('.time-appointment-time input');
    window.plays = window.plays || {};

    if (input.val() == '') {
        input.val('00:00');
    }

    window.plays[input.attr('id')] = setInterval(function () {
        let worked_split = input.val().split(':');
        let worked_minutes = worked_split[0];
        let worked_seconds = worked_split[1];

        worked_seconds++;

        if (worked_seconds >= 60) {
            worked_minutes++;
            worked_seconds = 0;
        }

        input.val(worked_minutes.toString().padStart(2, '0') +':'+ worked_seconds.toString().padStart(2, '0'));
        input.trigger('change');
    }, 60000);
});

jQuery('body').on('click', '.pause-time', function () {
    let input = jQuery(this).parents('.ticket-appointments').find('.time-appointment-time input');
    clearInterval(window.plays[input.attr('id')]);
});
