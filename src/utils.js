import * as turf from "turf";

export function calculateGeoJsonCenter(geoJson) {
  const centroids = geoJson.features.map((feature) => turf.centroid(feature));
  const totalCoordinates = centroids.reduce(
    (acc, feature) => {
      acc[0] += feature.geometry.coordinates[0];
      acc[1] += feature.geometry.coordinates[1];
      return acc;
    },
    [0, 0]
  );

  const numFeatures = geoJson.features.length;
  const center = [
    totalCoordinates[1] / numFeatures,
    totalCoordinates[0] / numFeatures,
  ];

  return center;
}
