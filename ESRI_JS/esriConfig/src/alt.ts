

// Individual imports for each Map, Chart and Calcite component

import "@arcgis/map-components/components/arcgis-legend";
import "@arcgis/map-components/components/arcgis-map";

const viewElement = document.querySelector("arcgis-map");

viewElement?.addEventListener("arcgisViewReadyChange", () => {
  // Use metadata from the Web Map to populate the header
   
  console.log("viewElement Ready", viewElement)

});
