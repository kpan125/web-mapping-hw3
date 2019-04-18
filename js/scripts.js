
// sets up mapbox access token
mapboxgl.accessToken = 'pk.eyJ1Ijoia3dwMjI1IiwiYSI6ImNqdWQ5NjIydTB3bHMzeW9na3hybGpwZncifQ.z8p_gZgCZfgPdWIG-24ksQ';

var map = new mapboxgl.Map({
  container: 'mapContainer',
  style: 'mapbox://styles/mapbox/dark-v9',
  center: [-73.98, 40.70],
  zoom: 9.5,
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

// var marker = new mapboxgl.Marker()
//   .setLngLat([-73.969145,40.669116])
//   .setPopup(popup)
//   .addTo(map);

console.log(gidata[0])
gidata.forEach(function(giPoint) {

  var markerColor = '#00FFFF';
  if (giPoint.Asset_Type.includes('Subsurface')) markerColor = '#778899';
  if (giPoint.Asset_Type === 'Detention System') markerColor = '#778899';
  if (giPoint.Asset_Type.includes('Roof')) markerColor = '#F2F12D';
  if (giPoint.Asset_Type.includes('Rain')) markerColor = '#2E8B57';
  if (giPoint.Asset_Type.includes('Porous')) markerColor = '#2E8B57';
  // if (studentData.nyuprogram === 'adjunct') thisStudentsColor = 'green';
  // if (studentData.nyuprogram === 'global liberal studies') thisStudentsColor = 'yellow';

  new mapboxgl.Marker({
    color: markerColor,
  })
    .setLngLat([giPoint.long, giPoint.lat])
    .setPopup(new mapboxgl.Popup({ offset: 40 })
      .setText(`This ${giPoint.Asset_Type} is located in the ${giPoint.Waterbody} watershed`))
    .addTo(map);
})

// studentPizzaShops.forEach(function(studentData) {
//
//   var thisStudentsColor = 'steelblue';
//   if (studentData.nyuprogram === 'wagner') thisStudentsColor = 'orange';
//   if (studentData.nyuprogram === 'cusp') thisStudentsColor = 'purple';
//   if (studentData.nyuprogram === 'adjunct') thisStudentsColor = 'green';
//   if (studentData.nyuprogram === 'global liberal studies') thisStudentsColor = 'yellow';
//
//   new mapboxgl.Marker({
//     color: thisStudentsColor,
//   })
//     .setLngLat([studentData.lng, studentData.lat])
//     .setPopup(new mapboxgl.Popup({ offset: 40 })
//       .setText(`${studentData.name} says their favorite pizza shop is ${studentData.favoritepizzashop}`))
//     .addTo(map);
// })
