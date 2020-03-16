const mapboxgl = require("mapbox-gl")

mapboxgl.accessToken = "pk.eyJ1IjoiY3J1em45NzgiLCJhIjoiY2s3dW95anR2MDZzbDNlbXNrZGdyOXFjZyJ9.fJslVkSbCNKLwp-bk2ClDw"

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705],
  zoom: 12,
  style: "mapbox://styles/mapbox/streets-v10"
});
