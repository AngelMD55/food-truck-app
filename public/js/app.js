// // geolocation
// var map, infoWindow;

// function initMap() {

// 	var DefaultLatLng= new google.maps.LatLng('32.2226', '10.9747');

// 	map = new google.maps.Map($('#geocodeMap'), {
// 		center: DefaultLatLng,
// 		zoom: 6
// 	});
// 	infoWindow = new google.maps.InfoWindow;

// 	if (navigator.geolocation) {
// 		navigator.geolocation.getCurrentPosition(function (position) {
// 			var pos = {
// 				lat: position.coords.latitude,
// 				lng: position.coords.longitude
// 			};

// 			infoWindow.setPosition(pos);
// 			infoWindow.setContent('Location found.');
// 			infoWindow.open(map);
// 			map.setCenter(pos);
// 		}, function () {
// 			handleLocationError(true, infoWindow, map.getCenter());
// 		});
// 	} else {
// 		// Browser doesn't support Geolocation
// 		handleLocationError(false, infoWindow, map.getCenter());
// 	}
// }

// function handleLocationError(browserHasGeolocation, infoWindow, pos) {
// 	infoWindow.setPosition(pos);
// 	infoWindow.setContent(browserHasGeolocation ?
// 		'Error: The Geolocation service failed.' :
// 		'Error: Your browser doesn\'t support geolocation.');
// 	infoWindow.open(map);
// }

// // geocoded
// function initMap() {

// 	var azStadium = {
// 		info: '<strong>Arizona Stadium</strong><br>\
// 					1 N National Championship Dr, Tucson, AZ 85719<br>\
// 					<a href="https://goo.gl/maps/56oQf7aEkNU2">Get Directions</a>',
// 		lat: 32.228948,
// 		lng: 110.948254
// 	};

// 	var rocksRopes = {
// 		info: '<strong>Rocks n Ropes</strong><br>\
// 					330 S Toole Ave #400, Tucson, AZ 85701<br>\
// 					<a href="https://goo.gl/maps/MwM9CgQEEzq">Get Directions</a>',
// 		lat: 32.217654,
// 		lng: 110.960857
// 	};

// 	var truckLocations = [
// 		[azStadium.info, azStadium.lat, azStadium.lng, 0],
// 		[rocksRopes.info, rocksRopes.lat, rocksRopes.lng, 1],
// 	];

// 	var map = new google.maps.Map($('#geocodeMap'), {
// 		zoom: 13,
// 		center: new google.maps.LatLng(32.2226, 110.9747),
// 		mapTypeId: google.maps.MapTypeId.ROADMAP
// 	});

// 	var infowindow = new google.maps.InfoWindow({});

// 	var marker, i;

// 	for (i = 0; i < truckLocations.length; i++) {
// 		marker = new google.maps.Marker({
// 			position: new google.maps.LatLng(truckLocations[i][1], truckLocations[i][2]),
// 			map: map
// 		});

// 		google.maps.event.addListener(marker, 'click', (function (marker, i) {
// 			return function () {
// 				infowindow.setContent(truckLocations[i][0]);
// 				infowindow.open(map, marker);
// 			}
// 		})(marker, i));
// 	}
// }