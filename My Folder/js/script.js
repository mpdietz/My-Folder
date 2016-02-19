$('img[data-alt-src]').hover(displaySwap,displaySwap);
		 
		 function displaySwap() {
		  var newSource = $(this).data('alt-src');
		    $(this).data('alt-src', $(this).attr('src'))
		    $(this).attr('src', newSource);
		    
		  $('#DisplayText h3').text($(this).parent().data('title'));  
		 }

var layer = L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png',{
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
  });

  var map = L.map('myMap').setView([40.706913,-73.987513], 11);
  map.addLayer(layer)

  //  myMapData.forEach(function(element) {
  //   var marker = L.marker(element.coord).addTo(map);
  //   marker.bindPopup("<b>Hello world!</b><br>I am " + element.name)
  // });
  // var panOptions = {
  //   animate: true,
  //   duration: 2
  // }