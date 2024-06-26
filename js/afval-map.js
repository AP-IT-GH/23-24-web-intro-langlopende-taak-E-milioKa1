var map = L.map('afvalMap').setView([51.178398, 4.461089], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">Mortsel</a>'
}).addTo(map);

var circle = L.circle([51.178398, 4.461089], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

circle.bindPopup("Recyclage Park");


var marker = L.marker([51.178398, 4.461089]).addTo(map);
marker.bindPopup("Visit us here");
