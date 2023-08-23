import * as React from "react";
import * as L from "leaflet";
import { FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";

export default function AoiCreator({ aoi, setAoi }) {
  const ref = React.useRef(null);

  const handleChange = (e) => {
    const geo = ref.current?.toGeoJSON();
    if (geo?.type === "FeatureCollection") {
      setAoi({ geo, layer: e.layer });
    }
  };

  const handleDelete = () => {
    setAoi(undefined);
  };

  return (
    <FeatureGroup ref={ref}>
      <EditControl
        position="topright"
        onEdited={handleChange}
        onCreated={handleChange}
        onDeleted={handleDelete}
        draw={{
          rectangle: false,
          circle: false,
          polyline: false,
          polygon: true,
          marker: false,
          circlemarker: false,
        }}
      />
    </FeatureGroup>
  );
}
