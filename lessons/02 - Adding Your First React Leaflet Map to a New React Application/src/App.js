import React from "react";
import "./assets/stylesheets/App.css";

/**
 * @lesson-02-todo Exercise 2
 * In order to build our map, we need to import out components.
 * How can we add those to our project?
 */
import { Map, TileLayer } from "react-leaflet";

import Layout from "./components/Layout";
import "leaflet/dist/leaflet.css";

function App() {
  return (
    <Layout>
      {/**
       * @lesson-02-todo Exercise 2
       * We want to add our first map to the app. Using the
       * the components we just imported above, how can we
       * configure the props to show our map?
       */}
      <Map center={[38.907132, -77.036546]} zoom={12}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </Map>
    </Layout>
  );
}

export default App;
