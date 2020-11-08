function getMap() {
	var map = new google.maps.Map(document.getElementById("map"), {
		zoom: 4,
		center: new google.maps.LatLng(14.591986, 121.065589)
	});
	  
	for ( var i = 0; i < markers.length; ++i ){
		var pinCoords = new google.maps.LatLng(markers[i].latitude_deg, markers[i].longitude_deg);
		
		var marker = new google.maps.Marker({
			position: (pinCoords),
			data: this,
			map: map,
			title: markers[i].name + " - " + markers[i].type,
		});
	}
	

}

getMap();