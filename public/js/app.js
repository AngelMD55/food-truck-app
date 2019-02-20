let truck = $("#truckName").text();
// array of truck objects
let truckLocations = [];

// user allows geolocation and function gets user position and truck name, then pushes truckOb to truckLocations array
function getPosition() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(displayLocationInfo);

		function displayLocationInfo(position) {
			const lat = position.coords.latitude;
			const lng = position.coords.longitude;

			let truckOb = {
				truckName: truck,
				lat: lat,
				lng: lng,
			}

			console.log(truckOb);
			truckLocations.push(truckOb)

			console.log(`longitude: ${lng} | latitude: ${lat}`);
		}
	} else {
		console.log("browser doesn't support geolocation api")
	}

	$("#vendorCheckIn").on("click", function (position) {
		console.log(truckLocations);

	})
}
getPosition();

// geolocation
var map, infoWindow;

function initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
		center: {lat: 32.2226, lng: 110.9747},
		zoom: 6
	});
	console.log(map);

	infoWindow = new google.maps.InfoWindow;

	// Try HTML5 geolocation.
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function (position) {
			var pos = {
				lat: position.coords.latitude,
				lng: position.coords.longitude
			};

			console.log(pos);

			infoWindow.setPosition(pos);
			infoWindow.setContent('Location found.');
			infoWindow.open(map);
			map.setCenter(pos);
		}, function () {
			handleLocationError(true, infoWindow, map.getCenter());
		});
	} else {
		// Browser doesn't support Geolocation
		handleLocationError(false, infoWindow, map.getCenter());
	}
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
	infoWindow.setPosition(pos);
	infoWindow.setContent(browserHasGeolocation ?
		'Error: The Geolocation service failed.' :
		'Error: Your browser doesn\'t support geolocation.');
	infoWindow.open(map);
}

// using places api with search autocomplete
function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
		center: { lat: 32.2341679, lng: -110.9465769 },
		zoom: 13
	});
	var input = document.getElementById('vendorAddress');

	map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

	var autocomplete = new google.maps.places.Autocomplete(input);
	autocomplete.bindTo('bounds', map);

	var infowindow = new google.maps.InfoWindow();
	var marker = new google.maps.Marker({
		map: map,
		anchorPoint: new google.maps.Point(0, -29)
	});

	autocomplete.addListener('place_changed', function () {
		infowindow.close();
		marker.setVisible(false);
		var place = autocomplete.getPlace();

		/* if place has a geometry, then place it on a map. */
		if (place.geometry.viewport) {
			map.fitBounds(place.geometry.viewport);
		} else {
			map.setCenter(place.geometry.location);
			map.setZoom(17);
		}
		marker.setIcon(({
			url: place.icon,
			size: new google.maps.Size(71, 71),
			origin: new google.maps.Point(0, 0),
			anchor: new google.maps.Point(17, 34),
			scaledSize: new google.maps.Size(35, 35)
		}));
		marker.setPosition(place.geometry.location);

		marker.setVisible(true);

		var address = '';
		if (place.address_components) {
			address = [
				(place.address_components[0] && place.address_components[0].short_name || ''),
				(place.address_components[1] && place.address_components[1].short_name || ''),
				(place.address_components[2] && place.address_components[2].short_name || '')
			].join(' ');
		}

		checkInLocation = [{
			lat: place.geometry.location.lat(),
			lng: place.geometry.location.lng()
		}];

		var checkInBtn = '<button id= "checkIn>Check-In</button>';
		google.maps.event.addListener(marker, 'click', function () {
			infowindow.setContent(address + checkInBtn);
			infowindow.open(map, marker);
		});

		google.maps.event.addListener(infowindow, 'domready', function () {
			google.maps.event.addDomListener(checkInBtn, 'click', function () {
				console.log(checkInLocation)
			});
		});
		
		// infowindow = new google.maps.InfoWindow({
		//     content: " "
		// });
		// infowindow.open(map, marker);

		// infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address + '<br><div> </div>' + '<br><button id= "checkIn>Check-In</button>');
		// infowindow.open(map, marker)

		// console.log(truckLocation);
	});

}

// to loop through trucklocations and place multiple markers
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
