/*****************************************
Created by admin@arulmr.com on 29/Nov/2012
*****************************************/

(function($) {
  $.fn.min_per = function(options) {

	var defaults = {
			output_div : 'percent',
		}

    var settings = $.extend(defaults, options);

    return this.each(function() {

		var output_div = settings.output_div;

		$(this).attr('maxlength', 2);
		$('#'+settings.output_div).append('Enter minutes in numbers to convert to percentage.');
		
		//To prevent non-numeral values
		$(this).keydown(function(event) {
			var minutes = percent = 0;
			// Allow: backspace, delete, tab, escape, and enter
			if ( event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 || 
				 // Allow: Ctrl+A
				(event.keyCode == 65 && event.ctrlKey === true) || 
				 // Allow: home, end, left, right
				(event.keyCode >= 35 && event.keyCode <= 39)) {
					 // let it happen, don't do anything
					 return;
			} else if ((event.keyCode > 47 && event.keyCode < 58) || (event.keyCode > 96 && event.keyCode < 105)){
				$(this).keyup(function(){
					var regex = /\d{0,2}/;
					minutes = $(this).val();
					if ( !(regex.test(minutes)) ){
						$('#'+settings.output_div).text("Correspondence Found");
						return false;
					}
					if (minutes > 0 && minutes < 60) {
						percent = ((minutes * 100) / 6000).toFixed(2);
						$('#'+settings.output_div).text(minutes + ' Minutes = ' + percent + ' Percentage of an hour.' );
						if (minutes.length == 2) {
							$(this).blur().unbind("keyup");
						}
					} else {
						$('#'+settings.output_div).text('Minutes should be between 1 and 59.');
					}
				});
			} else {
				// Ensure that it is a number and stop the keypress
				$('#'+settings.output_div).text('Only numbers can be entered.');
				if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode < 96 || event.keyCode > 105 )) {
					event.preventDefault(); 
				}
			}
		});
    });
  };

})( jQuery );
