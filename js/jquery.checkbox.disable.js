/****************************************************************
*** Created by admin@arulmr.com on 02/Nov/2012				  ***
*** Created for Visit ID project							  ***
*** Disables a specified field, if the parent field is empty. ***
****************************************************************/

(function($) {
  $.fn.check_ds = function(options) {

	var defaults = {
			checkbox : 'check',
		}

    var settings = $.extend(defaults, options);

    return this.each(function() {
		if ($.trim($(this).val()).length > 0) {
			$('#' + settings.checkbox).attr('disabled', false);
		} else {
			$('#' + settings.checkbox).attr('disabled', true);
		}

		$(this).keyup(function(){
			//alert(this)
			if ($.trim($(this).val()).length > 0) {
				$('#' + settings.checkbox).attr('disabled', false);
			} else {
				$('#' + settings.checkbox).attr('disabled', true);
			}

		});
    });

  };
})( jQuery );
