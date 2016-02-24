$('img[data-alt-src]').hover(displaySwap,displaySwap);
		 
		 function displaySwap() {
		  var newSource = $(this).data('alt-src');
		    $(this).data('alt-src', $(this).attr('src'))
		    $(this).attr('src', newSource);
		    
		  $('#DisplayText h3').text($(this).parent().data('title'));  
		 }



  //  myMapData.forEach(function(element) {
  //   var marker = L.marker(element.coord).addTo(map);
  //   marker.bindPopup("<b>Hello world!</b><br>I am " + element.name)
  // });
  // var panOptions = {
  //   animate: true,
  //   duration: 2
  // }