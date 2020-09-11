let map, infoWindow;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 48.8534, lng: 2.3488 },
        zoom: 11
    });
    infoWindow = new google.maps.InfoWindow();

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };
                stylers: [
                    { background-color: 'black' }
                   
                    // Add any stylers you need.
                ]
                infoWindow.setPosition(pos);
                infoWindow.setContent("Ici c'est vous");
                infoWindow.open(map);
                map.setCenter(pos);
            },
            () => {
                handleLocationError(true, infoWindow, map.getCenter());
            }
        );
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
        browserHasGeolocation
            ? "Erreur : le service de Géolocalisation a échoué."
            : "Erreur : Votre nagigateur ne prend pas en charge la géolocalisation."
    );
    infoWindow.open(map);
}


