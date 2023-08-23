import JSONPretty from "react-json-prettify";
import { github } from "react-json-prettify/dist/themes";
import { geoJSONData } from "../../Data";

export const DataSourceJsonView = () => {
  return (
    <JSONPretty
      json={geoJSONData}
      style={{ height: "100%", width: "100%" }}
      padding={4}
      theme={github}
    />
  );
};
