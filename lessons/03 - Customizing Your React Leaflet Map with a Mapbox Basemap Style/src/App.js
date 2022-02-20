import React from "react";
import { Map, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./assets/stylesheets/App.css";

import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <Map center={[6.9218386, 79.8562055]} zoom={25}>
        {/**
         * @lesson-03-todo
         * Now that we created a new Map Style with Mapbox,
         * we want to use it in our app so that we can have
         * a custom map. To do that, we'll need to update our
         * TileLayer to use a Mapbox endpoint and attribution.
         */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/${process.env.REACT_APP_MAPBOX_USERID}/${process.env.REACT_APP_MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_API_KEY}`}
          attribution='© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>'
        />
      </Map>
    </Layout>
  );
}

export default App;
