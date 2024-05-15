var map = L.map('contactMap').setView([51.17, 4.46], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">Mortsel</a>'
}).addTo(map);

var circle = L.circle([51.17, 4.46], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

circle.bindPopup("Neona Smart City");


var marker = L.marker([51.17, 4.46]).addTo(map);
marker.bindPopup("Visit us here");
