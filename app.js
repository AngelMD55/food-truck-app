
const keys = require("./keys.js");

const geocodeKey = keys.mapsGeocode.key;

let address = "444+E+Univeristy+Blvd+Tucson+AZ+85705"
let queryURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${geocodeKey}`

let encodedUrl = encodeURIComponent(queryURL);

$.ajax({
    url: encodedUrl,
    contentType: 'application/json',
    type: 'GET',
    "success": function (data) {

        if (data.status == 'OK') {
            console.log(data);
            console.log(address);

            initMap(address);
            showMap();

        }
        else {
            console.log('error');
            
        }
    },
});
