$('img[data-alt-src]').hover(displaySwap,displaySwap);
		 
		 function displaySwap() {
		  var newSource = $(this).data('alt-src');
		    $(this).data('alt-src', $(this).attr('src'))
		    $(this).attr('src', newSource);
		    
		  $('#DisplayText h3').text($(this).parent().data('title'));  
		 }