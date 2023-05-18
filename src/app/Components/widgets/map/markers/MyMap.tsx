'use client'
import React, { Component } from "react";
import * as leaflet from 'leaflet'
import { MapContainer, GeoJSON, Marker, Popup } from "react-leaflet";
import mapData from "../../../../../utils/data/countries.json";
import { Box } from "@mui/material";

type Points = leaflet.LatLngExpression[] | leaflet.LatLngExpression[][] | leaflet.LatLngExpression[][][]
type GeoJsonObject = {
  type:  "Feature" | "Polygon" | "Point" | "MultiPoint" | "LineString" | "MultiLineString" | "MultiPolygon" | "GeometryCollection" | "FeatureCollection",
  properties: {
    id: string,
    name: string,
    description: string
  },
  geometry: {
    type: string,
    coordinates: Points
  }
}
type MapData = {
  type: "FeatureCollection",
  features: GeoJsonObject,
}
const feature: GeoJsonObject = (mapData as unknown as MapData).features


class MyMap extends Component {
  state = { color: null };

  componentDidMount() {
    // console.log(mapData);
  }

  countryStyle: leaflet.PathOptions | leaflet.StyleFunction<any> = {
    fillColor: "red",
    fillOpacity: 1,
    color: "white",
    weight: 2,
    opacity: 0.6,
  };



  onEachCountry = (feature: any, layer: any) => {
    const featureName = feature.properties.description;
    layer.bindPopup(featureName);
    layer.options.fillColor = feature.properties.color ?? "grey";
    layer.options.fillOpacity = 0.5;
    layer.on({

    });
  };

  colorChange = (event: any) => {
    this.setState({ color: event.target.value });
  };


  render() {
    var myIcon = leaflet.icon({
      iconUrl: 'url(/images/logodinter2.png)',
      iconSize: [50, 50],
      iconAnchor: [10, 50],
      popupAnchor: [-3, -76],
  });
    return (
      <>
        <MapContainer
        style={{ height: "65vh", backgroundColor: "transparent", width: "100%" }}
        zoom={8} center={[-8.422055, -38.955547]}
        scrollWheelZoom={false}
        >
          <GeoJSON
            style={this.countryStyle}
            data={feature}
            onEachFeature={this.onEachCountry}
          />
          <Marker position={[-9.3925216,-40.5093674]} icon={myIcon}>
            <Popup>
              Diretoria Intergrada do Interior 2 <br />
              outra informação
            </Popup>
          </Marker>
        </MapContainer>
      </>
    );
  }
}

export default MyMap;
