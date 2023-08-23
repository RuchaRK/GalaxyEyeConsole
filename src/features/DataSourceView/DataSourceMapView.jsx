import * as React from "react";
import { geoJSONData } from "../../Data";
import { calculateGeoJsonCenter } from "../../utils";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";

const geoJsonCenter = calculateGeoJsonCenter(geoJSONData);

export const DataSourceMapView = () => {
  return (
    <MapContainer
      center={geoJsonCenter}
      zoom={5}
      zoomControl={true}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />

      <GeoJSON data={geoJSONData} />
    </MapContainer>
  );
};
