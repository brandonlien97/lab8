function initMap() {
	// add your code here
	//console.log(L);
	L.mapquest.key = 'KEY';
	L.mapquest.key = 'LKYZET9Uj6E91nAZTwKWW73MhOq4Xjdf';

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
		center: [32.88, -117.236],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	// Add a marker to the map
	L.marker([32.88, -117.236]).addTo(map);
}