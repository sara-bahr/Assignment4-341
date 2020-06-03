
var map;
function initMap() {
    var options = {
        center: { lat: -38.144323, lng: 175.494327 },
        zoom: 8
    }
    var markers = [];
    var geocoder = new google.maps.Geocoder();
    var map = new google.maps.Map(document.getElementById('map'), options);
    google.maps.event.addListener(map, 'click',
        function (event) {
            if(markers.length >0){
                deleteMarker()
            }
            addMarker(event.latLng)
            geocoder.geocode({
                location: event.latLng,
            }, (results, status) => {
                if (status === 'OK') {
                    if (results && results.length) {
                        var filtered_array = results.filter(result => result.types.includes("locality"));
                        var addressResult = filtered_array.length ? filtered_array[0] : results[0];
                        if (addressResult.address_components) {
                            addressResult.address_components.forEach((component) => {
                                if (component.types.includes('locality')) {
                                    document.getElementById("city").textContent = component.long_name
                                    var cityName = component.long_name
                                    handleCityChange(cityName)
                                }
                            });
                        }
                    }
                }
            });
        })

    function addMarker(coords) {
        var marker = new google.maps.Marker({
            position: coords,
            map: map

        })
        markers.push(marker);
    }
    function deleteMarker() {
        markers[0].setMap(null)
        markers.pop();
    }

}
var handleCityChange = async (cityName) => {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=6b7b471967dd0851d0010cdecf28f829&units=metric&q=${cityName},nz`)
    const json = await res.json()
    var table = document.getElementsByClassName("table")[0]
    console.log(table)
    if (json.cod === 200) {
        document.cookie = json.name;
        let rows = [{
            "name": "City",
            "index": json.name
        },
        {
            "name": "Temperature",
            "index": json.main.temp
        },
        {
            "name": "Pressure",
            "index": json.main.pressure
        },
        {
            "name": "Humidity",
            "index": json.main.humidity
        },
        {
            "name": "Min Temperature",
            "index": json.main.temp_min
        },
        {
            "name": "Max Temperature",
            "index": json.main.temp_max
        },
        {
            "name": "Condition",
            "index": json.weather[0].description
        }
        ];
        table.innerHTML = "";
        for (var i = 0; i < rows.length; i++) {
            var row1 = table.insertRow();
            var cell1 = row1.insertCell();
            var cell2 = row1.insertCell();
            cell1.innerHTML = rows[i].name;
            cell2.innerHTML = rows[i].index;
        }
    }
    else {
        table.innerHTML = "";
        table.innerHTML = json.message;
    }
}

