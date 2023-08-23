import * as React from "react";
import * as L from "leaflet";
import {
  MainContainer,
  LeftContainer,
  RightContainer,
  InstructionsContainer,
} from "./Console.styles";

import { ConsoleMapView } from "./ConsoleMapView";

export const Console = () => {
  return (
    <MainContainer>
      <LeftContainer>
        <h3>Welcome to Galaxeye Satellite Image Console!</h3>
        <h4 style={{ textAlign: "left" }}>
          Explore and visualize satellite image data effortlessly. Select an
          Area of Interest (AOI) on the map, and we'll provide you with all the
          relevant satellite image tiles intersecting with your chosen AOI.
        </h4>
        <InstructionsContainer>
          <h4>Instructions </h4>

          <ul>
            <li>
              To create an AOI, choose the Polygon Icon on the map and place
              points on the map
            </li>

            <li>
              Once the polygon is created, you will visualize the tiles that
              intersect with it.
            </li>

            <li>To initiate a new polygon, remove previous draw AOI</li>
            <li>To remove the results, you can utilize the delete icon.</li>
            <li>
              If you wish to modify the polygon, you can do so using the Edit
              icon.
            </li>
          </ul>
        </InstructionsContainer>
      </LeftContainer>
      <RightContainer>
        <ConsoleMapView />
      </RightContainer>
    </MainContainer>
  );
};
