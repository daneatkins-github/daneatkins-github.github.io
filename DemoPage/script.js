// Load the Map and MapView modules
//require(["esri/Map", "esri/views/MapView"], (Map, MapView) => {
const [Map, MapView] = await $arcgis.import([
  "@arcgis/core/Map.js",
  "@arcgis/core/views/MapView.js",
]);

const myMap = new Map({
  basemap: "topo-vector",
});

const myView = new MapView({
  container: "viewDiv",
  map: myMap,
  zoom: 4,
  center: [15, 65], // longitude, latitude
});
//});