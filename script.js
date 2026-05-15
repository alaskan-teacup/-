const map = L.map('map').setView([35.0116, 135.7681], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

map.on('click', function(e) {

  #位置情報の取得
  alert(
    "lat: " + e.latlng.lat +
    "\nlng: " + e.latlng.lng
  );

});

map.on('click', function(e) {

  console.log(e.latlng.lat, e.latlng.lng);

});

map.on('click', function(e) {

  const marker = L.marker([
    e.latlng.lat,
    e.latlng.lng
  ]).addTo(map);

});

#個々のマーカー

const marker = L.marker([35.0116, 135.7681]).addTo(map);

marker.bindPopup("京都の中心エリア");
