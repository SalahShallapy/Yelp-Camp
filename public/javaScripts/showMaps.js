// mapboxgl.accessToken = mapToken;
// const map = new mapboxgl.Map({
//   container: 'map',
//   style: 'mapbox://styles/mapbox/streets-v11' ,
//   center : parseInt([campground.geometry.coordinates]) ,
//   zoom : 4
// });

// new mapboxgl.Marker()
//   .setLngLat(campground.geometry.coordinates)
//   .addTo(map)

mapboxgl.accessToken = mapToken;
const campground = JSON.parse(campgroundString);
const coordinates = campground.geometry.coordinates;
const latitude = coordinates[1];
const longitude = coordinates[0];

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [longitude, latitude], // Use parsed longitude & latitude values
  zoom: 10
});

map.addControl(new mapboxgl.NavigationControl())


new mapboxgl.Marker()
  .setLngLat(coordinates) // Use the entire coordinates array
  .setPopup(
    new mapboxgl.Popup({offset:25})
      .setHTML(
        `<h3>${campground.title}</h3>
        <p>${campground.location}</p>
        `
      )
  )
  .addTo(map);