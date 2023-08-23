import * as React from "react";
import { geoJSONData } from "../../Data";
import { calculateGeoJsonCenter } from "../../utils";
import intersect from "@turf/intersect";
import AoiCreator from "./AoiCreator";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";

const geoJsonCenter = calculateGeoJsonCenter(geoJSONData);

export const ConsoleMapView = () => {
  const [aoi, setAoi] = React.useState();
  const [key, setKey] = React.useState();
  const mapRef = React.useRef();

  const filterFeatures = {
    ...geoJSONData,
    features: aoi
      ? geoJSONData.features.filter((feature) =>
          intersect(feature, aoi.geo.features[0])
        )
      : [],
  };
  return (
    <MapContainer
      center={geoJsonCenter}
      zoom={5}
      zoomControl={true}
      className="map"
      ref={mapRef}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />
      <AoiCreator
        aoi={aoi}
        setAoi={(selectedAoi) => {
          setAoi(selectedAoi);
          setKey(new Date());
        }}
      />
      <GeoJSON data={filterFeatures} key={key} style={{ color: "red" }} />
    </MapContainer>
  );
};
