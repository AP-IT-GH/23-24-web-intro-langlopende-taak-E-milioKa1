var map = L.map('contactMap').setView([51.229804, 4.416389], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">Neona</a>'
}).addTo(map);

var circle = L.circle([51.229804, 4.416389], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

circle.bindPopup("Neona Smart City");

var logoIcon = L.icon({
    iconUrl: 'assets/images/logo_icon.png',
    iconSize:     [50, 50], // size of the icon
});


var marker = L.marker([51.229804, 4.416389], {icon: logoIcon}).addTo(map);
marker.bindPopup("Visit us here");
