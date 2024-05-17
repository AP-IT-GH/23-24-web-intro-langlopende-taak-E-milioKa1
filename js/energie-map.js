var map = L.map('energieMap').setView([51.161161, 4.435341], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">Mortsel</a>'
}).addTo(map);

var circle = L.circle([51.161161, 4.435341], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

circle.bindPopup("Green energy fields");


var marker = L.marker([51.161161, 4.435341]).addTo(map);
marker.bindPopup("Visit us here");