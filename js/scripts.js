
// sets up mapbox access token
mapboxgl.accessToken = 'pk.eyJ1Ijoia3dwMjI1IiwiYSI6ImNqdWQ5NjIydTB3bHMzeW9na3hybGpwZncifQ.z8p_gZgCZfgPdWIG-24ksQ';

var map = new mapboxgl.Map({
  container: 'mapContainer',
  style: 'mapbox://styles/mapbox/dark-v9',
  center: [-73.959961, 40.694175],
  zoom: 10.5
});

// create the popup
var popup = new mapboxgl.Popup({ offset: 40 })
  .setText('Prospect Park');

var marker = new mapboxgl.Marker()
  .setLngLat([-73.969231,40.664494])
  .setPopup(popup) // sets a popup on this marker
  .addTo(map);
