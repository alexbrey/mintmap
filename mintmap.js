var southWest = new L.LatLng(20, -15);
var northEast = new L.LatLng(55, 60); 
var bounds = new L.LatLngBounds(northEast, southWest);

var map = L.mapbox.map('map')
    .setView([40,20], 4)
    .setMaxBounds(bounds)
    .addLayer(L.mapbox.tileLayer('abrey.byzmints',{
        detectRetina: true,
        retinaVersion: 'abrey.byz_retina'
    }));
    
var retinagrid = L.mapbox.gridLayer('abrey.byz_retina');
var normalgrid = L.mapbox.gridlayer('abrey.byzmints');

if (L.detectRetina()) {
    map.addLayer(retinagrid);
    map.addControl(L.mapbox.gridControl(retinagrid));
} else {
    map.addLayer(normalgrid)
    map.addControl(L.mapbox.gridControl(normalgrid));
};
