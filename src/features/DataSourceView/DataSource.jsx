import * as React from "react";
import {
  MainContainer,
  LeftContainer,
  RightContainer,
} from "./DataSource.styles";
import { DataSourceJsonView } from "./DataSourceJsonView";
import { DataSourceMapView } from "./DataSourceMapView";

export const DataSource = () => {
  return (
    <MainContainer>
      <LeftContainer>
        <h3>Map View </h3>
        <DataSourceMapView />
      </LeftContainer>
      <RightContainer>
        <h3>JSON View</h3>
        <DataSourceJsonView />
      </RightContainer>
    </MainContainer>
  );
};
