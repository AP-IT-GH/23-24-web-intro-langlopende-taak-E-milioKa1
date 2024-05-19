let map = L.map('mobiliteitMap').setView([51.216667, 4.4], 14);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">Openstreetmap</a> | &copy; <a href="https://api.citybik.es/v2/">CityBikes</a>'
}).addTo(map);

// API call
fetch("https://api.citybik.es/v2/networks/velo-antwerpen")
    .then((response) => response.json())
    .then((data) => {
        // ga over elke station en voeg een marker toe die laat zien hoeveel fietsen beschikbaar zijn
        data.network.stations.forEach(station => {
            let iconUrl;

            // icon van marker wordt bepaald aan de hand van beschikbare fietsen / vrije plaatsen
            if (station.free_bikes === 0) {
                iconUrl = 'assets/images/red-marker.png';
            } else if (station.empty_slots === 0) {
                iconUrl = 'assets/images/green-marker.png';
            } else {
                iconUrl = 'assets/images/blue-marker.png';
            }

            let fietsIcon = L.icon({
                iconUrl: iconUrl,
                iconSize:     [25, 25],
            });

            let marker = L.marker([station.latitude, station.longitude], {icon: fietsIcon}).addTo(map);

            marker.bindPopup(`<b>${station.name}</b><br>${station.free_bikes} Fietsen, ${station.empty_slots} vrije plaatsen<br>${station.extra.address}`);
        })
    });