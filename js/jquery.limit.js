/*****************************************
Created by arul@arulmr.com on 14/Jun/2012
*****************************************/

(function($) {
  $.fn.limit = function(options) {

	var defaults = {
			limit : 200,
			alert_count: 10,
			counter_id : 'counter',
			class : 'alert'
		}

    var settings = $.extend(defaults, options);

    return this.each(function() {

		var characters = settings.limit;

		$('#'+settings.counter_id).append('<strong>' + characters + '</strong> characters remaining');

		$(this).keyup(function(){
			if ($(this).val().length > characters) {
				$(this).val($(this).val().substr(0, characters));
			}

			var remaining = characters - $(this).val().length;

			$('#'+settings.counter_id).html('<strong>' + remaining + '</strong> characters remaining');

			if (remaining <= settings.alert_count) {
				$('#'+settings.counter_id).addClass(settings.class);
			} else {
				$('#'+settings.counter_id).removeClass(settings.class);
			}

		});
    });

  };
})( jQuery );
